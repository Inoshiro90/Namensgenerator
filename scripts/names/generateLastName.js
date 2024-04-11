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
		case 'Aasimar':
			lastName = generateRandomLastNameHuman(region);
			break;
		case 'Aarakocra':
			lastName = generateRandomLastNameAarakocra();
			break;
		case 'Duergar':
			lastName = generateRandomLastNameDuergar();
			break;
		case 'Githyanki':
			lastName = generateRandomLastNameGithyanki();
			break;
		case 'Githzerai':
			lastName = generateRandomLastNameGithzerai();
			break;
		case 'Firbolg':
			lastName = generateRandomLastNameFirbolg();
			break;
		case 'Echsenmensch':
			lastName = generateRandomLastNameLizardfolk();
			break;
		case 'Goliath':
			lastName = generateRandomLastNameGoliath();
			break;
		case 'Kenku':
			lastName = generateRandomLastNameKenku();
			break;
		case 'Tabaxi':
			lastName = generateRandomLastNameTabaxi();
			break;
		case 'Triton':
			lastName = generateRandomLastNameTriton();
			break;
		default:
			console.error('Ungültiges Volk des Autors:', race);
	}
	return lastName;
}
