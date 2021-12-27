const sumAll = function(num1, num2) {
	if ((typeof num1 !== "number" || num1 < 0) ||
		(typeof num2 !== "number" || num2 < 0))
		return "ERROR";
	
	let sum = 0;
	let lesser_num, greater_num;
	if (num1 < num2)
	{
		lesser_num = num1;
		greater_num = num2;
	}
	else
	{
		lesser_num = num2;
		greater_num = num1;
	}
	
	for (let i = lesser_num; i <= greater_num; ++i)
	{
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
