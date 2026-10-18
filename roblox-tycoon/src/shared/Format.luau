-- Short money strings: 950 -> "950", 1234 -> "1.23K", 5600000 -> "5.6M".

local Format = {}

local SUFFIXES = { "", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc" }

local function trimZeros(s)
	if string.find(s, ".", 1, true) then
		s = string.gsub(s, "0+$", "")
		s = string.gsub(s, "%.$", "")
	end
	return s
end

local function scaledString(n, tier)
	local scaled = n / 10 ^ (tier * 3)
	if scaled < 10 then
		return string.format("%.2f", scaled)
	elseif scaled < 100 then
		return string.format("%.1f", scaled)
	end
	return string.format("%.0f", scaled)
end

function Format.short(n)
	if n ~= n or n == math.huge or n == -math.huge then
		return "0"
	end
	local sign = n < 0 and "-" or ""
	n = math.abs(n)
	if n < 1000 then
		return sign .. tostring(math.floor(n))
	end
	local tier = math.min(math.floor(math.log10(n) / 3), #SUFFIXES - 1)
	local s = scaledString(n, tier)
	-- 999,999 rounds to "1000K"; promote it to "1M".
	if tonumber(s) >= 1000 and tier < #SUFFIXES - 1 then
		tier += 1
		s = scaledString(n, tier)
	end
	return sign .. trimZeros(s) .. SUFFIXES[tier + 1]
end

function Format.money(n)
	return "$" .. Format.short(n)
end

return Format
