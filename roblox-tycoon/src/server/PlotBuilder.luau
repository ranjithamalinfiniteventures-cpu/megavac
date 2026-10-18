-- Builds every physical part of the map from code, so the game runs in an
-- empty place with no hand-made models. All plot geometry is given in the
-- plot's local frame: origin at the floor's top centre, +X runs along the
-- belt toward the furnace, +Z points out of the entrance toward the road.

local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Config = require(ReplicatedStorage:WaitForChild("Shared"):WaitForChild("Config"))

local PlotBuilder = {}

local PLOT_SIZE = 100
local PLOT_SPACING = 120
local ROW_OFFSET = 90 -- distance from the road's centre line to a plot's centre
local FLOOR_TOP = 1 -- clears the default Baseplate, whose top is at y = 0

local BELT_Z = -25
local BELT_WIDTH = 6
local BELT_TOP = 3
local BELT_START_X = -40
local BELT_END_X = 24
local DROPPER_FIRST_X = -36
local UPGRADER_FIRST_X = 6
local LANE_STEP = 6

local BUTTON_COLUMNS = 5

PlotBuilder.SpawnOffset = CFrame.new(0, 3, 42) -- faces -Z, toward the belt

local DARK = Color3.fromRGB(45, 47, 55)
local STEEL = Color3.fromRGB(90, 95, 105)

local function part(props)
	local p = Instance.new("Part")
	p.Anchored = true
	p.TopSurface = Enum.SurfaceType.Smooth
	p.BottomSurface = Enum.SurfaceType.Smooth
	p.Material = Enum.Material.SmoothPlastic
	local parent = props.Parent
	props.Parent = nil
	for key, value in props do
		p[key] = value
	end
	p.Parent = parent
	return p
end

-- A flat disc lying on the floor. Cylinders run along their X axis, so the
-- part is rolled 90 degrees to stand that axis upright.
local function disc(parent, cframe, diameter, color, name)
	return part({
		Name = name,
		Shape = Enum.PartType.Cylinder,
		Size = Vector3.new(0.6, diameter, diameter),
		CFrame = cframe * CFrame.Angles(0, 0, math.pi / 2),
		Color = color,
		Material = Enum.Material.Neon,
		Parent = parent,
	})
end

local function billboard(adornee, size, offset, maxDistance)
	local gui = Instance.new("BillboardGui")
	gui.Size = size
	gui.StudsOffset = offset
	gui.MaxDistance = maxDistance
	gui.LightInfluence = 0
	gui.Adornee = adornee
	gui.Parent = adornee
	return gui
end

local function label(parent, text, size, position, color)
	local l = Instance.new("TextLabel")
	l.BackgroundTransparency = 1
	l.Size = size
	l.Position = position
	l.Font = Enum.Font.FredokaOne
	l.TextScaled = true
	l.TextColor3 = color or Color3.new(1, 1, 1)
	l.TextStrokeTransparency = 0.3
	l.Text = text
	l.Parent = parent
	return l
end

-- Plots sit in two rows facing each other across a road along world X.
function PlotBuilder.plotOrigins(count)
	local perRow = math.ceil(count / 2)
	local origins = {}
	for i = 1, count do
		local row = (i - 1) // perRow
		local column = (i - 1) % perRow
		local x = (column - (perRow - 1) / 2) * PLOT_SPACING
		if row == 0 then
			origins[i] = CFrame.new(x, FLOOR_TOP, -ROW_OFFSET)
		else
			origins[i] = CFrame.new(x, FLOOR_TOP, ROW_OFFSET) * CFrame.Angles(0, math.pi, 0)
		end
	end
	return origins
end

function PlotBuilder.buildLobby(parent, plotCount)
	local perRow = math.ceil(plotCount / 2)
	local length = perRow * PLOT_SPACING + 40
	local lobby = Instance.new("Folder")
	lobby.Name = "Lobby"
	lobby.Parent = parent
	part({
		Name = "Road",
		Size = Vector3.new(length, 1, ROW_OFFSET * 2 - PLOT_SIZE),
		CFrame = CFrame.new(0, FLOOR_TOP - 0.5, 0),
		Color = Color3.fromRGB(70, 72, 78),
		Material = Enum.Material.Asphalt,
		Parent = lobby,
	})
	if not parent:FindFirstChildWhichIsA("SpawnLocation", true) then
		local spawn = Instance.new("SpawnLocation")
		spawn.Anchored = true
		spawn.Neutral = true
		spawn.Duration = 0
		spawn.Size = Vector3.new(10, 1, 10)
		spawn.CFrame = CFrame.new(0, FLOOR_TOP + 0.5, 0)
		spawn.TopSurface = Enum.SurfaceType.Smooth
		spawn.Parent = lobby
	end
end

-- The parts every plot has whether or not anyone has bought anything.
function PlotBuilder.buildBase(model, origin)
	local refs = {}

	part({
		Name = "Floor",
		Size = Vector3.new(PLOT_SIZE, 1, PLOT_SIZE),
		CFrame = origin * CFrame.new(0, -0.5, 0),
		Color = Color3.fromRGB(106, 127, 63),
		Material = Enum.Material.Grass,
		Parent = model,
	})

	local beltLength = BELT_END_X - BELT_START_X
	local beltCentreX = (BELT_START_X + BELT_END_X) / 2
	local belt = part({
		Name = "Belt",
		Size = Vector3.new(beltLength, BELT_TOP, BELT_WIDTH),
		CFrame = origin * CFrame.new(beltCentreX, BELT_TOP / 2, BELT_Z),
		Color = Color3.fromRGB(30, 30, 34),
		Material = Enum.Material.DiamondPlate,
		Parent = model,
	})
	-- An anchored part with a velocity carries whatever rests on it.
	belt.AssemblyLinearVelocity = origin.RightVector * Config.BeltSpeed
	refs.belt = belt

	for _, side in { -1, 1 } do
		part({
			Name = "Rail",
			Size = Vector3.new(beltLength, BELT_TOP + 2, 0.5),
			CFrame = origin * CFrame.new(beltCentreX, (BELT_TOP + 2) / 2, BELT_Z + side * (BELT_WIDTH / 2 + 0.25)),
			Color = Color3.fromRGB(240, 190, 30),
			Parent = model,
		})
	end
	part({
		Name = "BeltStop",
		Size = Vector3.new(0.5, BELT_TOP + 2, BELT_WIDTH + 1),
		CFrame = origin * CFrame.new(BELT_START_X - 0.25, (BELT_TOP + 2) / 2, BELT_Z),
		Color = Color3.fromRGB(240, 190, 30),
		Parent = model,
	})

	-- Drops ride the belt into this face of the furnace and are sold.
	refs.intake = part({
		Name = "FurnaceIntake",
		Size = Vector3.new(2, 6, BELT_WIDTH + 1),
		CFrame = origin * CFrame.new(BELT_END_X + 1, BELT_TOP + 3, BELT_Z),
		Color = Color3.fromRGB(255, 110, 20),
		Material = Enum.Material.Neon,
		Parent = model,
	})
	local furnace = part({
		Name = "Furnace",
		Size = Vector3.new(8, 10, 10),
		CFrame = origin * CFrame.new(BELT_END_X + 6, 5, BELT_Z),
		Color = DARK,
		Material = Enum.Material.Metal,
		Parent = model,
	})
	label(
		billboard(furnace, UDim2.fromOffset(160, 40), Vector3.new(0, 7, 0), 120),
		"FURNACE",
		UDim2.fromScale(1, 1),
		UDim2.new()
	)

	refs.bankPad = disc(model, origin * CFrame.new(30, 0.3, -8), 8, Color3.fromRGB(60, 220, 90), "CollectPad")
	local bankGui = billboard(refs.bankPad, UDim2.fromOffset(220, 70), Vector3.new(0, 4, 0), 80)
	label(bankGui, "STEP TO COLLECT", UDim2.fromScale(1, 0.4), UDim2.new(), Color3.fromRGB(200, 255, 200))
	refs.bankLabel =
		label(bankGui, "$0", UDim2.fromScale(1, 0.6), UDim2.fromScale(0, 0.4), Color3.fromRGB(120, 255, 140))

	for _, side in { -1, 1 } do
		part({
			Name = "SignPost",
			Size = Vector3.new(1, 16, 1),
			CFrame = origin * CFrame.new(side * 11, 8, PLOT_SIZE / 2 - 0.5),
			Color = STEEL,
			Parent = model,
		})
	end
	local sign = part({
		Name = "Sign",
		Size = Vector3.new(23, 4, 1),
		CFrame = origin * CFrame.new(0, 17, PLOT_SIZE / 2 - 0.5),
		Color = DARK,
		Parent = model,
	})
	refs.signLabel = label(
		billboard(sign, UDim2.fromOffset(300, 60), Vector3.new(0, 0, 0), 250),
		"Empty Plot",
		UDim2.fromScale(1, 1),
		UDim2.new()
	)

	return refs
end

function PlotBuilder.dropSpawn(origin, lane)
	return origin * CFrame.new(DROPPER_FIRST_X + (lane - 1) * LANE_STEP, BELT_TOP + 3, BELT_Z)
end

function PlotBuilder.dropper(parent, origin, item)
	local model = Instance.new("Model")
	model.Name = item.id
	local x = DROPPER_FIRST_X + (item.lane - 1) * LANE_STEP
	part({
		Name = "Pillar",
		Size = Vector3.new(1.5, 13, 1.5),
		CFrame = origin * CFrame.new(x, 6.5, BELT_Z - 5),
		Color = STEEL,
		Parent = model,
	})
	part({
		Name = "Arm",
		Size = Vector3.new(1.5, 1.5, 3),
		CFrame = origin * CFrame.new(x, 12, BELT_Z - 3.5),
		Color = STEEL,
		Parent = model,
	})
	model.PrimaryPart = part({
		Name = "Body",
		Size = Vector3.new(4, 4, 4),
		CFrame = origin * CFrame.new(x, 11, BELT_Z),
		Color = item.color,
		Material = Enum.Material.Metal,
		Parent = model,
	})
	part({
		Name = "Spout",
		Size = Vector3.new(2, 2, 2),
		CFrame = origin * CFrame.new(x, 8, BELT_Z),
		Color = DARK,
		Parent = model,
	})
	model.Parent = parent
	return model
end

-- Returns the model and the non-colliding field that upgrades drops passing
-- through it.
function PlotBuilder.upgrader(parent, origin, item)
	local model = Instance.new("Model")
	model.Name = item.id
	local x = UPGRADER_FIRST_X + (item.lane - 1) * LANE_STEP
	for _, side in { -1, 1 } do
		part({
			Name = "Post",
			Size = Vector3.new(1, 9, 1),
			CFrame = origin * CFrame.new(x, 4.5, BELT_Z + side * 4),
			Color = STEEL,
			Parent = model,
		})
	end
	part({
		Name = "Beam",
		Size = Vector3.new(1, 1, 9),
		CFrame = origin * CFrame.new(x, 9, BELT_Z),
		Color = item.color,
		Material = Enum.Material.Neon,
		Parent = model,
	})
	local field = part({
		Name = "Field",
		Size = Vector3.new(1.5, 5, BELT_WIDTH),
		CFrame = origin * CFrame.new(x, BELT_TOP + 2.5, BELT_Z),
		Color = item.color,
		Material = Enum.Material.ForceField,
		Transparency = 0.2,
		CanCollide = false,
		CanQuery = false,
		Parent = model,
	})
	model.PrimaryPart = field
	model.Parent = parent
	return model, field
end

function PlotBuilder.walls(parent, origin)
	local model = Instance.new("Model")
	model.Name = "walls"
	local height, half = 14, PLOT_SIZE / 2
	local gap = 20 -- entrance width
	local segment = (PLOT_SIZE - gap) / 2
	local pieces = {
		{ Vector3.new(PLOT_SIZE, height, 1), Vector3.new(0, height / 2, -half + 0.5) },
		{ Vector3.new(1, height, PLOT_SIZE), Vector3.new(-half + 0.5, height / 2, 0) },
		{ Vector3.new(1, height, PLOT_SIZE), Vector3.new(half - 0.5, height / 2, 0) },
		{ Vector3.new(segment, height, 1), Vector3.new(-(gap + segment) / 2, height / 2, half - 0.5) },
		{ Vector3.new(segment, height, 1), Vector3.new((gap + segment) / 2, height / 2, half - 0.5) },
	}
	for _, piece in pieces do
		part({
			Name = "Wall",
			Size = piece[1],
			CFrame = origin * CFrame.new(piece[2]),
			Color = Color3.fromRGB(200, 196, 185),
			Material = Enum.Material.Brick,
			Parent = model,
		})
	end
	model.Parent = parent
	return model
end

function PlotBuilder.overclock(parent, origin)
	local model = Instance.new("Model")
	model.Name = "overclock"
	part({
		Name = "Generator",
		Size = Vector3.new(6, 6, 6),
		CFrame = origin * CFrame.new(-20, 3, BELT_Z - 13),
		Color = DARK,
		Material = Enum.Material.Metal,
		Parent = model,
	})
	part({
		Name = "Core",
		Shape = Enum.PartType.Ball,
		Size = Vector3.new(4, 4, 4),
		CFrame = origin * CFrame.new(-20, 7.5, BELT_Z - 13),
		Color = Color3.fromRGB(0, 255, 200),
		Material = Enum.Material.Neon,
		Parent = model,
	})
	model.Parent = parent
	return model
end

function PlotBuilder.furnaceUpgrade(parent, origin)
	local model = Instance.new("Model")
	model.Name = "furnace"
	part({
		Name = "Chimney",
		Size = Vector3.new(3, 10, 3),
		CFrame = origin * CFrame.new(BELT_END_X + 6, 15, BELT_Z),
		Color = DARK,
		Material = Enum.Material.Metal,
		Parent = model,
	})
	part({
		Name = "Glow",
		Size = Vector3.new(8.4, 1, 10.4),
		CFrame = origin * CFrame.new(BELT_END_X + 6, 9, BELT_Z),
		Color = Color3.fromRGB(255, 60, 0),
		Material = Enum.Material.Neon,
		Parent = model,
	})
	model.Parent = parent
	return model
end

-- Returns the pad and the label showing its cost, which the tycoon recolours
-- as the owner's cash rises and falls.
function PlotBuilder.button(parent, origin, item, costText)
	local column = (item.slot - 1) % BUTTON_COLUMNS
	local row = (item.slot - 1) // BUTTON_COLUMNS
	local cframe = origin * CFrame.new(-32 + column * 16, 0.3, 8 + row * 11)
	local pad = disc(parent, cframe, 6, Color3.fromRGB(255, 80, 80), item.id)
	local gui = billboard(pad, UDim2.fromOffset(200, 64), Vector3.new(0, 4, 0), 90)
	label(gui, item.name, UDim2.fromScale(1, 0.5), UDim2.new())
	local costLabel = label(gui, costText, UDim2.fromScale(1, 0.5), UDim2.fromScale(0, 0.5))
	return pad, costLabel
end

return PlotBuilder
