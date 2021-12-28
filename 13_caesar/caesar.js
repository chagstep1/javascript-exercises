const caesar = function(str, shift) {
	const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	const alphabet_capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	const alphabet_length = 26;
	
	new_str = "";
	for (letter of str) {
		let alphabet_to_use;
		if (alphabet_capital.includes(letter)) {
			alphabet_to_use = alphabet_capital;
		}
		else if (alphabet.includes(letter)) {
			alphabet_to_use = alphabet;
		}
		else {
			new_str += letter;
			continue;
		}
			
		
		let index = alphabet_to_use.indexOf(letter);
		
		index += shift;
		index %= alphabet_length;
		if (index < 0)
			index += alphabet_length;
		
		new_str += alphabet_to_use[index];
	}
	
	return new_str;
};

// Do not edit below this line
module.exports = caesar;
