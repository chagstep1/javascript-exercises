const removeFromArray = function(array) {
	let new_array = array
	for (let i = 1; i < arguments.length; ++i)
	{
		let index = new_array.indexOf(arguments[i]);
		if (index === -1) continue;
		new_array = new_array.slice(0, index).concat(new_array.slice(index+1));
	}
	return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
