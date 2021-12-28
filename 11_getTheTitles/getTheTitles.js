const getTheTitles = function(arr) {
	let title_array = [];
	for (book of arr)
	{
		title_array.push(book['title']);
	}
	return title_array;
};

// Do not edit below this line
module.exports = getTheTitles;
