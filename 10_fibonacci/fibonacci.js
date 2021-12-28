const fibonacci = function(num) {
	if (num < 0) return "OOPS";
	let prev_prev_number = 1;
	let prev_number = 1;
	let current_number = 1;
	for (let i = 3; i <= num; ++i)
	{
		prev_prev_number = prev_number;
		prev_number = current_number;
		current_number = prev_prev_number + prev_number;
	}
	return current_number;
};

// Do not edit below this line
module.exports = fibonacci;
