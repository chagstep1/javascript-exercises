const reverseString = function(str) {
	let final_str = "";
	for (let i = str.length; i > 0; --i)
	{
		final_str += str[i-1];
	}
	return final_str;
};

// Do not edit below this line
module.exports = reverseString;
