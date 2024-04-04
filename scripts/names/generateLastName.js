function generateLastName(race, region) {
	let lastName;
	switch (race) {
		case 'Mensch':
			lastName = generateRandomLastNameHuman(region);
			break;
		case 'Zwerg':
			lastName = generateRandomLastNameDwarf();
			break;
		case 'Elf':
			lastName = generateRandomLastNameElf();
			break;
		case 'Halbling':
			lastName = generateRandomLastNameHalfling();
			break;
		case 'Gnom':
			lastName = generateRandomLastNameGnome();
			break;
		case 'Halbelf':
			let humanSociety = Math.random() < 0.5;
			if (humanSociety) {
				lastName = generateRandomLastNameHuman(region);
			} else {
				lastName = generateRandomLastNameElf();
			}
			break;
		case 'Halbork':
			lastName = generateRandomLastNameHalfOrc();
			break;
		case 'Drachenblütiger':
			lastName = generateRandomLastNameDragonborn();
			break;
		case 'Tiefling':
			lastName = generateRandomLastNameHuman(region);
			break;
		default:
			console.error('Ungültiges Volk des Autors:', race);
	}
	return lastName;
}
