-- Client HUD: the cash counter, rebirth bonus, and pop-up messages from the
-- server.

local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local TweenService = game:GetService("TweenService")

local Shared = ReplicatedStorage:WaitForChild("Shared")
local Config = require(Shared:WaitForChild("Config"))
local Format = require(Shared:WaitForChild("Format"))

local player = Players.LocalPlayer
local notifyEvent = ReplicatedStorage:WaitForChild("TycoonNotify")

local TOAST_COLORS = {
	success = Color3.fromRGB(90, 230, 110),
	error = Color3.fromRGB(255, 95, 95),
	info = Color3.fromRGB(235, 235, 235),
}
local MAX_TOASTS = 4

local gui = Instance.new("ScreenGui")
gui.Name = "TycoonHud"
gui.ResetOnSpawn = false
gui.Parent = player:WaitForChild("PlayerGui")

local panel = Instance.new("Frame")
panel.AnchorPoint = Vector2.new(0.5, 0)
panel.Position = UDim2.new(0.5, 0, 0, 8)
panel.Size = UDim2.fromOffset(240, 70)
panel.BackgroundColor3 = Color3.fromRGB(25, 27, 33)
panel.BackgroundTransparency = 0.2
panel.Parent = gui
Instance.new("UICorner").Parent = panel

local function label(text, size, position, color)
	local l = Instance.new("TextLabel")
	l.BackgroundTransparency = 1
	l.Size = size
	l.Position = position
	l.Font = Enum.Font.FredokaOne
	l.TextScaled = true
	l.TextColor3 = color
	l.Text = text
	l.Parent = panel
	return l
end

local cashLabel = label("$0", UDim2.new(1, -16, 0.62, 0), UDim2.fromOffset(8, 4), Color3.fromRGB(120, 255, 140))
local rebirthLabel = label("", UDim2.new(1, -16, 0.3, 0), UDim2.new(0, 8, 0.64, 0), Color3.fromRGB(255, 210, 90))

local toasts = Instance.new("Frame")
toasts.AnchorPoint = Vector2.new(0.5, 1)
toasts.Position = UDim2.new(0.5, 0, 1, -110)
toasts.Size = UDim2.fromOffset(420, 200)
toasts.BackgroundTransparency = 1
toasts.Parent = gui
local layout = Instance.new("UIListLayout")
layout.VerticalAlignment = Enum.VerticalAlignment.Bottom
layout.HorizontalAlignment = Enum.HorizontalAlignment.Center
layout.SortOrder = Enum.SortOrder.LayoutOrder
layout.Padding = UDim.new(0, 4)
layout.Parent = toasts

local toastCount = 0
local function showToast(text, kind)
	toastCount += 1
	local toast = Instance.new("TextLabel")
	toast.LayoutOrder = toastCount
	toast.Size = UDim2.fromOffset(420, 36)
	toast.BackgroundColor3 = Color3.fromRGB(25, 27, 33)
	toast.BackgroundTransparency = 0.25
	toast.Font = Enum.Font.FredokaOne
	toast.TextScaled = true
	toast.TextColor3 = TOAST_COLORS[kind] or TOAST_COLORS.info
	toast.Text = text
	toast.Parent = toasts
	Instance.new("UICorner").Parent = toast
	local padding = Instance.new("UIPadding")
	padding.PaddingTop = UDim.new(0, 5)
	padding.PaddingBottom = UDim.new(0, 5)
	padding.Parent = toast

	local shown = {}
	for _, child in toasts:GetChildren() do
		if child:IsA("TextLabel") then
			table.insert(shown, child)
		end
	end
	table.sort(shown, function(a, b)
		return a.LayoutOrder < b.LayoutOrder
	end)
	for i = 1, #shown - MAX_TOASTS do
		shown[i]:Destroy()
	end

	task.delay(2.5, function()
		if not toast.Parent then
			return
		end
		local fade = TweenService:Create(toast, TweenInfo.new(0.4), {
			TextTransparency = 1,
			BackgroundTransparency = 1,
		})
		fade.Completed:Connect(function()
			toast:Destroy()
		end)
		fade:Play()
	end)
end

notifyEvent.OnClientEvent:Connect(showToast)

local leaderstats = player:WaitForChild("leaderstats")
local cash = leaderstats:WaitForChild("Cash")
local rebirths = leaderstats:WaitForChild("Rebirths")

local popTween = TweenInfo.new(0.12, Enum.EasingStyle.Quad, Enum.EasingDirection.Out, 0, true)
local lastCash = cash.Value
local function updateCash()
	cashLabel.Text = Format.money(cash.Value)
	if cash.Value > lastCash then
		TweenService:Create(panel, popTween, { Size = UDim2.fromOffset(256, 74) }):Play()
	end
	lastCash = cash.Value
end

local function updateRebirths()
	local multiplier = Config.rebirthMultiplier(rebirths.Value)
	rebirthLabel.Text = `Rebirths: {rebirths.Value}  ·  Income x{multiplier}`
end

cash.Changed:Connect(updateCash)
rebirths.Changed:Connect(updateRebirths)
updateCash()
updateRebirths()
