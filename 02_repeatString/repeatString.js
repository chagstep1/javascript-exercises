const repeatString = function(string, num) {
	if (num < 0) return "ERROR";
	let end_str = "";
	for (let i = 0; i < num; ++i)
	{
		end_str += string;
	}
	return end_str;
};

// Do not edit below this line
module.exports = repeatString;
