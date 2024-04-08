function generateRandomRace() {
	race = getRandomElement([
		'Mensch',
		'Zwerg',
		'Elf',
		'Halbling',
		'Gnom',
		'Halbelf',
		'Halbork',
		'Drachenblütiger',
		'Tiefling',
		'Aasimar',
		'Aarakocra',
		'Echsenmensch',
		'Firbolg',
		'Goliath',
		'Kenku',
		'Tabaxi',
		'Triton'
	]);
// console.log('Zufällig ausgewähltes Volk ist ' + race)
	return race
}
