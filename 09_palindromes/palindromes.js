const palindromes = function (str) {
	let new_str = str.toLowerCase();
	new_str = new_str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
	let heh = "";
	for (let i = 0; i < (new_str.length/2); ++i) {
		if (new_str[i] !== new_str[new_str.length-(i+1)]) return false;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
