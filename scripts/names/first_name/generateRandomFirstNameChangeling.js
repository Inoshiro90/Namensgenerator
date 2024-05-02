function generateRandomFirstNameChangeling() {
	let firstName;

	firstName = changelingFirstNames[Math.floor(Math.random() * changelingFirstNames.length)];

	firstName =
		firstName +
		'-' +
		getRandomElement([
			'mit-dem-' + getRandomElement(changelingAttributeEye) + '-Auge',
			'mit-den-' + getRandomElement(changelingAttributeEyes) + '-Augen',
			'mit-dem-' + getRandomElement(changelingAttributeLimbs) + '-Arm',
			'mit-den-' + getRandomElement(changelingAttributeLimbs) + '-Armen',
			'mit-dem-' + getRandomElement(changelingAttributeBeard) + '-Bart',
			'mit-dem-' + getRandomElement(changelingAttributeLimbs) + '-Bein',
			'mit-den-' + getRandomElement(changelingAttributeLimbs) + '-Beinen',
			'mit-dem-' + getRandomElement(changelingAttributeFingernail) + '-Fingernagel',
			'mit-den-' + getRandomElement(changelingAttributeFingernails) + '-Fingernägeln',
			'mit-dem-' + getRandomElement(changelingAttributeLimbs) + '-Fuß',
			'mit-den-' + getRandomElement(changelingAttributeLimbs) + '-Füßen',
			'mit-den-' + getRandomElement(changelingAttributeLimbs) + '-Gliedmaßen',
			'mit-dem-' + getRandomElement(changelingAttributeHair) + '-Haar',
			'mit-den-' + getRandomElement(changelingAttributeHairs) + '-Haaren',
			'mit-der-' + getRandomElement(changelingAttributeHand) + '-Hand',
			'mit-den-' + getRandomElement(changelingAttributeHands) + '-Händen',
			'mit-der-' + getRandomElement(changelingAttributeSkin) + '-Haut',
			'mit-dem-' + getRandomElement(changelingAttributeChin) + '-Kinn',
			'mit-der-' + getRandomElement(changelingAttributeClothing) + '-Kleidung',
			'mit-dem-' + getRandomElement(changelingAttributeBody) + '-Körper',
			'mit-der-' + getRandomElement(changelingAttributeLip) + '-Lippe',
			'mit-den-' + getRandomElement(changelingAttributeLips) + '-Lippen',
			'mit-der-' + getRandomElement(changelingAttributeScar) + '-Narbe',
			'mit-den-' + getRandomElement(changelingAttributeScars) + '-Narben',
			'mit-der-' + getRandomElement(changelingAttributeNose) + '-Nase',
			'mit-dem-' + getRandomElement(changelingAttributeEar) + '-Ohr',
			'mit-den-' + getRandomElement(changelingAttributeEars) + '-Ohren',
			'mit-dem-' + getRandomElement(changelingAttributeTooth) + '-Zahn',
			'mit-den-' + getRandomElement(changelingAttributeTheeth) + '-Zähnen',
			'mit-der-' + getRandomElement(changelingAttributeCheek) + '-Wange',
			'mit-den-' + getRandomElement(changelingAttributeCheeks) + '-Wangen',
		]);

	// console.log(lastName)
	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
