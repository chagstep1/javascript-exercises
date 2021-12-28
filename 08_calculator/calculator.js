const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
	for (num of arr) {
		sum += num;
	}
	return sum;
};

const multiply = function(arr) {
	let sum = 1;
	for (num of arr) {
		sum *= num;
	}
	return sum;
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(upToNum) {
	let result = 1;
	for (let i = 2; i <= upToNum; ++i)
	{
		result *= i;
	}
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
