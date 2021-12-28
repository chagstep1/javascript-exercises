const findTheOldest = function(arr) {
	const date = new Date();
	let oldest_person = arr[0];
	let oldest_age = -1;
	for (person of arr)
	{
		let person_age = -1;
		if ("yearOfDeath" in person) {
			person_age = person["yearOfDeath"] - person["yearOfBirth"];
		}
		else {
			person_age = date.getFullYear() - person["yearOfBirth"];
		}
		
		if (person_age > oldest_age) {
			oldest_age = person_age;
			oldest_person = person;
		}
	}
	return oldest_person;
};

// Do not edit below this line
module.exports = findTheOldest;
