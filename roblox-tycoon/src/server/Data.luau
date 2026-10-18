-- DataStore persistence. A load that fails returns fresh data marked
-- unsaveable, so a DataStore outage can never overwrite real progress with
-- an empty save.

local DataStoreService = game:GetService("DataStoreService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")

local Config = require(ReplicatedStorage:WaitForChild("Shared"):WaitForChild("Config"))

local Data = {}

local MAX_ATTEMPTS = 3

-- Unpublished places cannot open a DataStore at all.
local store
do
	local ok, err = pcall(function()
		store = DataStoreService:GetDataStore(Config.DataStoreName)
	end)
	if not ok then
		warn("[Tycoon] DataStores unavailable, progress will not save:", err)
	end
end

local function key(userId)
	return "player_" .. userId
end

function Data.default()
	return { Cash = Config.StartingCash, Bank = 0, Rebirths = 0, Owned = {} }
end

local function number(value, fallback)
	value = tonumber(value)
	if value == nil or value ~= value or value < 0 or value == math.huge then
		return fallback
	end
	return value
end

local function sanitize(raw)
	if type(raw) ~= "table" then
		return Data.default()
	end
	local owned = {}
	if type(raw.Owned) == "table" then
		for _, id in raw.Owned do
			if Config.ItemsById[id] then
				table.insert(owned, id)
			end
		end
	end
	return {
		Cash = number(raw.Cash, Config.StartingCash),
		Bank = number(raw.Bank, 0),
		Rebirths = math.floor(number(raw.Rebirths, 0)),
		Owned = owned,
	}
end

-- Retries a DataStore call. In Studio with API access turned off every call
-- fails the same way, so it gives up after the first try there.
local function attempt(callback)
	local err
	for i = 1, MAX_ATTEMPTS do
		local ok, result = pcall(callback)
		if ok then
			return true, result
		end
		err = result
		if RunService:IsStudio() then
			break
		end
		task.wait(i * 2)
	end
	return false, err
end

-- Returns the player's data and whether it is safe to save over it later.
function Data.load(userId)
	if not store then
		return Data.default(), false
	end
	local ok, result = attempt(function()
		return store:GetAsync(key(userId))
	end)
	if not ok then
		warn("[Tycoon] Could not load data for", userId, result)
		return Data.default(), false
	end
	return sanitize(result), true
end

function Data.save(userId, data)
	if not store then
		return false
	end
	local ok, err = attempt(function()
		store:SetAsync(key(userId), data, { userId })
	end)
	if not ok then
		warn("[Tycoon] Could not save data for", userId, err)
	end
	return ok
end

return Data
