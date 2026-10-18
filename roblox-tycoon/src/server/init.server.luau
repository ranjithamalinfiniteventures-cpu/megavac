-- Server entry point: builds the map, gives each joining player a plot, and
-- saves their progress.

local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Config = require(ReplicatedStorage:WaitForChild("Shared"):WaitForChild("Config"))
local Data = require(script.Data)
local PlotBuilder = require(script.PlotBuilder)
local Tycoon = require(script.Tycoon)

local notifyEvent = Instance.new("RemoteEvent")
notifyEvent.Name = "TycoonNotify"
notifyEvent.Parent = ReplicatedStorage

local function notify(player, text, kind)
	notifyEvent:FireClient(player, text, kind)
end

PlotBuilder.buildLobby(workspace, Config.PlotCount)

local plotFolder = Instance.new("Folder")
plotFolder.Name = "Tycoons"
plotFolder.Parent = workspace

local tycoons = {}
for i, origin in PlotBuilder.plotOrigins(Config.PlotCount) do
	tycoons[i] = Tycoon.new(i, origin, plotFolder, notify)
end

-- player -> { tycoon, canSave }
local sessions = {}

local function freeTycoon()
	for _, tycoon in tycoons do
		if tycoon:isFree() then
			return tycoon
		end
	end
	return nil
end

local function save(player)
	local session = sessions[player]
	if session and session.canSave then
		Data.save(player.UserId, session.tycoon:serialize())
	end
end

local function onPlayerAdded(player)
	local leaderstats = Instance.new("Folder")
	leaderstats.Name = "leaderstats"
	local cash = Instance.new("NumberValue")
	cash.Name = "Cash"
	cash.Value = Config.StartingCash
	cash.Parent = leaderstats
	local rebirths = Instance.new("IntValue")
	rebirths.Name = "Rebirths"
	rebirths.Parent = leaderstats
	leaderstats.Parent = player

	local data, canSave = Data.load(player.UserId)
	if not player.Parent then
		return -- left while loading
	end

	local tycoon = freeTycoon()
	if not tycoon then
		notify(player, "Every plot is taken. Lower Max Players to " .. Config.PlotCount .. ".", "error")
		return
	end
	sessions[player] = { tycoon = tycoon, canSave = canSave }
	tycoon:claim(player, data, cash, rebirths)

	local function sendToPlot(character)
		local root = character:WaitForChild("HumanoidRootPart", 10)
		if root and sessions[player] then
			character:PivotTo(tycoon.spawnCFrame)
		end
	end
	player.CharacterAdded:Connect(sendToPlot)
	if player.Character then
		task.spawn(sendToPlot, player.Character)
	end

	if not canSave then
		notify(player, "Progress will not save here (publish the place and enable API access).", "info")
	end
end

local function onPlayerRemoving(player)
	local session = sessions[player]
	if not session then
		return
	end
	save(player)
	sessions[player] = nil
	session.tycoon:release()
end

Players.PlayerAdded:Connect(onPlayerAdded)
Players.PlayerRemoving:Connect(onPlayerRemoving)
for _, player in Players:GetPlayers() do
	task.spawn(onPlayerAdded, player)
end

task.spawn(function()
	while true do
		task.wait(Config.AutosaveInterval)
		for player in sessions do
			task.spawn(save, player)
		end
	end
end)

-- The server can shut down before PlayerRemoving handlers finish, so save
-- everyone here and wait for the saves to land.
game:BindToClose(function()
	local pending = 0
	for player in sessions do
		pending += 1
		task.spawn(function()
			save(player)
			pending -= 1
		end)
	end
	local deadline = os.clock() + 25
	while pending > 0 and os.clock() < deadline do
		task.wait()
	end
end)
