-- Every tunable number in the tycoon lives here. Shared so the client HUD can
-- show the same rebirth multiplier the server pays out.

local Config = {}

Config.PlotCount = 8 -- set the place's Max Players to this or lower
Config.StartingCash = 0
Config.RebirthBonus = 0.5 -- each rebirth adds +50% to all income
Config.BeltSpeed = 10 -- studs per second
Config.DefaultInterval = 1.5 -- seconds between drops
Config.MaxDropsPerPlot = 80
Config.DropLifetime = 30 -- seconds before a stuck drop is cleaned up
Config.AutosaveInterval = 60
Config.DataStoreName = "DropperTycoon_v1"

local function rgb(r, g, b)
	return Color3.fromRGB(r, g, b)
end

-- The purchase tree, in button order. `requires` lists the item ids that must
-- be owned before an item's button appears; "all" means every non-rebirth item.
-- Droppers take a `lane` (1-7, upstream to downstream) and upgraders a lane
-- (1-3) after the last dropper, so every drop passes every upgrader.
Config.Items = {
	{
		id = "dropper1",
		name = "Basic Dropper",
		kind = "Dropper",
		cost = 0,
		value = 2,
		lane = 1,
		color = rgb(163, 162, 165),
	},
	{
		id = "dropper2",
		name = "Copper Dropper",
		kind = "Dropper",
		cost = 40,
		requires = { "dropper1" },
		value = 4,
		lane = 2,
		color = rgb(196, 112, 62),
	},
	{
		id = "walls",
		name = "Factory Walls",
		kind = "Walls",
		cost = 100,
		requires = { "dropper1" },
	},
	{
		id = "upgrader1",
		name = "Washer (x1.5)",
		kind = "Upgrader",
		cost = 200,
		requires = { "dropper2" },
		multiplier = 1.5,
		lane = 1,
		color = rgb(80, 200, 255),
	},
	{
		id = "dropper3",
		name = "Iron Dropper",
		kind = "Dropper",
		cost = 400,
		requires = { "upgrader1" },
		value = 10,
		lane = 3,
		color = rgb(110, 115, 125),
	},
	{
		id = "overclock",
		name = "Overclock (+33% speed)",
		kind = "Overclock",
		cost = 750,
		requires = { "dropper3" },
		multiplier = 0.75, -- drop interval multiplier
	},
	{
		id = "dropper4",
		name = "Silver Dropper",
		kind = "Dropper",
		cost = 1500,
		requires = { "dropper3" },
		value = 25,
		lane = 4,
		color = rgb(220, 225, 235),
	},
	{
		id = "upgrader2",
		name = "Polisher (x2)",
		kind = "Upgrader",
		cost = 3000,
		requires = { "dropper4" },
		multiplier = 2,
		lane = 2,
		color = rgb(180, 90, 255),
	},
	{
		id = "dropper5",
		name = "Gold Dropper",
		kind = "Dropper",
		cost = 6000,
		requires = { "upgrader2" },
		value = 60,
		lane = 5,
		color = rgb(255, 200, 40),
	},
	{
		id = "furnace",
		name = "Furnace Mk II (x1.5)",
		kind = "Furnace",
		cost = 12000,
		requires = { "dropper5" },
		multiplier = 1.5,
	},
	{
		id = "dropper6",
		name = "Diamond Dropper",
		kind = "Dropper",
		cost = 25000,
		requires = { "dropper5" },
		value = 150,
		lane = 6,
		color = rgb(120, 240, 255),
	},
	{
		id = "upgrader3",
		name = "Gold Plater (x3)",
		kind = "Upgrader",
		cost = 60000,
		requires = { "dropper6", "furnace" },
		multiplier = 3,
		lane = 3,
		color = rgb(255, 170, 0),
	},
	{
		id = "dropper7",
		name = "Mega Dropper",
		kind = "Dropper",
		cost = 150000,
		requires = { "upgrader3" },
		value = 400,
		interval = 1,
		lane = 7,
		color = rgb(255, 60, 120),
	},
	{
		id = "rebirth",
		name = "REBIRTH (+50% income)",
		kind = "Rebirth",
		cost = 500000, -- scales with rebirth count, see getCost
		requires = "all",
	},
}

Config.ItemsById = {}
for slot, item in Config.Items do
	item.slot = slot
	Config.ItemsById[item.id] = item
end

function Config.rebirthMultiplier(rebirths)
	return 1 + rebirths * Config.RebirthBonus
end

function Config.getCost(item, rebirths)
	if item.kind == "Rebirth" then
		return item.cost * (rebirths + 1)
	end
	return item.cost
end

function Config.requirementsMet(item, owned)
	if item.requires == "all" then
		for _, other in Config.Items do
			if other.kind ~= "Rebirth" and not owned[other.id] then
				return false
			end
		end
		return true
	end
	for _, id in item.requires or {} do
		if not owned[id] then
			return false
		end
	end
	return true
end

-- Catch config mistakes at startup instead of as a broken plot mid-game.
do
	local MAX_SLOTS = 15
	local laneLimits = { Dropper = 7, Upgrader = 3 }
	local lanesUsed = { Dropper = {}, Upgrader = {} }
	assert(#Config.Items <= MAX_SLOTS, `Config: at most {MAX_SLOTS} items fit the button grid`)
	for _, item in Config.Items do
		assert(Config.ItemsById[item.id] == item, `Config: duplicate item id {item.id}`)
		if type(item.requires) == "table" then
			for _, id in item.requires do
				assert(Config.ItemsById[id], `Config: {item.id} requires unknown item {id}`)
			end
		end
		local limit = laneLimits[item.kind]
		if limit then
			assert(item.lane and item.lane >= 1 and item.lane <= limit, `Config: {item.id} needs a lane 1-{limit}`)
			assert(not lanesUsed[item.kind][item.lane], `Config: {item.id} shares lane {item.lane}`)
			lanesUsed[item.kind][item.lane] = true
		end
	end
end

return Config
