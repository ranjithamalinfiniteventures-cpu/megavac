-- One plot: who owns it, what they have bought, the droppers that are
-- running, and the cash waiting in the furnace's bank.

local Debris = game:GetService("Debris")
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Shared = ReplicatedStorage:WaitForChild("Shared")
local Config = require(Shared:WaitForChild("Config"))
local Format = require(Shared:WaitForChild("Format"))
local PlotBuilder = require(script.Parent.PlotBuilder)

local AFFORDABLE = Color3.fromRGB(70, 230, 100)
local TOO_EXPENSIVE = Color3.fromRGB(255, 80, 80)
local NOTIFY_COOLDOWN = 1

local Tycoon = {}
Tycoon.__index = Tycoon

local function playerFromHit(hit)
	local character = hit:FindFirstAncestorWhichIsA("Model")
	return character and Players:GetPlayerFromCharacter(character)
end

local function folder(name, parent)
	local f = Instance.new("Folder")
	f.Name = name
	f.Parent = parent
	return f
end

function Tycoon.new(index, origin, parent, notify)
	local self = setmetatable({}, Tycoon)
	self.origin = origin
	self.notify = notify
	self.model = Instance.new("Model")
	self.model.Name = "Plot" .. index
	self.refs = PlotBuilder.buildBase(self.model, origin)
	self.items = folder("Items", self.model)
	self.drops = folder("Drops", self.model)
	self.buttonFolder = folder("Buttons", self.model)
	self.model.Parent = parent
	self.spawnCFrame = origin * PlotBuilder.SpawnOffset

	self.owner = nil
	self.rebirths = 0
	self.connections = {}
	self.lastNotify = {}
	self:_resetProgress()

	self.refs.intake.Touched:Connect(function(hit)
		self:_sell(hit)
	end)
	self.refs.bankPad.Touched:Connect(function(hit)
		if self.owner and playerFromHit(hit) == self.owner then
			self:_collect()
		end
	end)
	return self
end

function Tycoon:isFree()
	return self.owner == nil
end

-- Clears everything bought on the plot. Bumping the generation stops the
-- dropper loops started under the old one.
function Tycoon:_resetProgress()
	self.generation = (self.generation or 0) + 1
	self.items:ClearAllChildren()
	self.drops:ClearAllChildren()
	self.buttonFolder:ClearAllChildren()
	self.owned = {}
	self.buttons = {}
	self.bank = 0
	self.intervalMultiplier = 1
	self.furnaceMultiplier = 1
end

function Tycoon:claim(player, data, cashValue, rebirthsValue)
	self.owner = player
	self.cash = cashValue
	self.rebirthsValue = rebirthsValue
	self.rebirths = data.Rebirths
	rebirthsValue.Value = data.Rebirths
	cashValue.Value = data.Cash
	self.bank = data.Bank
	self.refs.signLabel.Text = player.DisplayName .. "'s Factory"

	local owned = {}
	for _, id in data.Owned do
		owned[id] = true
	end
	for _, item in Config.Items do
		if owned[item.id] and item.kind ~= "Rebirth" then
			self.owned[item.id] = true
			self:_build(item)
		end
	end

	table.insert(
		self.connections,
		cashValue.Changed:Connect(function()
			self:_recolorButtons()
		end)
	)
	self:_refreshButtons()
	self:_updateBank()
end

function Tycoon:release()
	for _, connection in self.connections do
		connection:Disconnect()
	end
	self.connections = {}
	self.owner = nil
	self.cash = nil
	self.rebirthsValue = nil
	self.lastNotify = {}
	self:_resetProgress()
	self.rebirths = 0
	self.refs.signLabel.Text = "Empty Plot"
	self:_updateBank()
end

function Tycoon:serialize()
	local owned = {}
	for id in self.owned do
		table.insert(owned, id)
	end
	return {
		Cash = self.cash.Value,
		Bank = self.bank,
		Rebirths = self.rebirths,
		Owned = owned,
	}
end

function Tycoon:_notify(text, kind, cooldownKey)
	if not self.owner then
		return
	end
	if cooldownKey then
		local now = os.clock()
		if now - (self.lastNotify[cooldownKey] or -math.huge) < NOTIFY_COOLDOWN then
			return
		end
		self.lastNotify[cooldownKey] = now
	end
	self.notify(self.owner, text, kind)
end

function Tycoon:_build(item)
	if item.kind == "Dropper" then
		self:_startDropper(item, PlotBuilder.dropper(self.items, self.origin, item))
	elseif item.kind == "Upgrader" then
		local _, field = PlotBuilder.upgrader(self.items, self.origin, item)
		field.Touched:Connect(function(hit)
			self:_upgrade(hit, item)
		end)
	elseif item.kind == "Walls" then
		PlotBuilder.walls(self.items, self.origin)
	elseif item.kind == "Overclock" then
		PlotBuilder.overclock(self.items, self.origin)
		self.intervalMultiplier = item.multiplier
	elseif item.kind == "Furnace" then
		PlotBuilder.furnaceUpgrade(self.items, self.origin)
		self.furnaceMultiplier = item.multiplier
	end
end

function Tycoon:_startDropper(item, model)
	local generation = self.generation
	task.spawn(function()
		while true do
			task.wait((item.interval or Config.DefaultInterval) * self.intervalMultiplier)
			if self.generation ~= generation or not model.Parent then
				return
			end
			self:_spawnDrop(item)
		end
	end)
end

function Tycoon:_spawnDrop(item)
	if #self.drops:GetChildren() >= Config.MaxDropsPerPlot then
		return
	end
	local drop = Instance.new("Part")
	drop.Name = "Drop"
	drop.Size = Vector3.new(1.2, 1.2, 1.2)
	drop.Color = item.color
	drop.Material = Enum.Material.SmoothPlastic
	drop.TopSurface = Enum.SurfaceType.Smooth
	drop.BottomSurface = Enum.SurfaceType.Smooth
	drop.CFrame = PlotBuilder.dropSpawn(self.origin, item.lane)
	drop:SetAttribute("Value", item.value)
	drop.Parent = self.drops
	-- Server-owned physics, so a client cannot fling or duplicate drops.
	pcall(drop.SetNetworkOwner, drop, nil)
	Debris:AddItem(drop, Config.DropLifetime)
end

function Tycoon:_upgrade(hit, item)
	if hit.Parent ~= self.drops or hit:GetAttribute(item.id) then
		return
	end
	hit:SetAttribute(item.id, true)
	hit:SetAttribute("Value", hit:GetAttribute("Value") * item.multiplier)
	hit.Color = hit.Color:Lerp(item.color, 0.6)
	hit.Material = Enum.Material.Neon
end

function Tycoon:_sell(hit)
	if hit.Parent ~= self.drops then
		return
	end
	local value = hit:GetAttribute("Value") or 0
	hit:Destroy()
	if not self.owner then
		return
	end
	self.bank += value * self.furnaceMultiplier * Config.rebirthMultiplier(self.rebirths)
	self:_updateBank()
end

function Tycoon:_collect()
	local amount = math.floor(self.bank)
	if amount < 1 then
		return
	end
	self.bank -= amount
	self.cash.Value += amount
	self:_updateBank()
	self:_notify("+" .. Format.money(amount), "success", "collect")
end

function Tycoon:_updateBank()
	self.refs.bankLabel.Text = Format.money(self.bank)
end

function Tycoon:_refreshButtons()
	for _, item in Config.Items do
		local available = self.owner ~= nil and not self.owned[item.id] and Config.requirementsMet(item, self.owned)
		local button = self.buttons[item.id]
		if available and not button then
			local cost = Config.getCost(item, self.rebirths)
			local costText = cost == 0 and "FREE" or Format.money(cost)
			local pad, costLabel = PlotBuilder.button(self.buttonFolder, self.origin, item, costText)
			pad.Touched:Connect(function(hit)
				local player = playerFromHit(hit)
				if player then
					self:_purchase(player, item)
				end
			end)
			self.buttons[item.id] = { pad = pad, costLabel = costLabel, cost = cost }
		elseif not available and button then
			button.pad:Destroy()
			self.buttons[item.id] = nil
		end
	end
	self:_recolorButtons()
end

function Tycoon:_recolorButtons()
	if not self.cash then
		return
	end
	for _, button in self.buttons do
		local color = self.cash.Value >= button.cost and AFFORDABLE or TOO_EXPENSIVE
		button.pad.Color = color
		button.costLabel.TextColor3 = color
	end
end

function Tycoon:_purchase(player, item)
	local button = self.buttons[item.id]
	if player ~= self.owner or not button then
		return
	end
	local cash = self.cash.Value
	if cash < button.cost then
		self:_notify("Need " .. Format.money(button.cost - cash) .. " more", "error", item.id)
		return
	end
	self.cash.Value = cash - button.cost
	if item.kind == "Rebirth" then
		self:_rebirth()
		return
	end
	self.owned[item.id] = true
	self:_build(item)
	self:_refreshButtons()
	self:_notify("Bought " .. item.name .. "!", "success")
end

function Tycoon:_rebirth()
	self:_resetProgress()
	self.rebirths += 1
	self.rebirthsValue.Value = self.rebirths
	self.cash.Value = Config.StartingCash
	self:_refreshButtons()
	self:_updateBank()
	local multiplier = Config.rebirthMultiplier(self.rebirths)
	self:_notify(`Rebirth {self.rebirths}! All income is now x{multiplier}`, "success")
end

return Tycoon
