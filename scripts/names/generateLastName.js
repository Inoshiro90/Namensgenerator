function generateLastName(race, region, firstName) {
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
		case 'Goblin':
		case 'Grottenschrat':
		case 'Hobgoblin':
			lastName = generateRandomLastNameGoblinoid();
			break;
		case 'Grung':
			lastName = generateRandomLastNameGrung();
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
		case 'Kalashtar':
			lastName = generateRandomLastNameKalashtar(firstName);
			break;
		case 'Kenku':
			lastName = generateRandomLastNameKenku();
			break;
		case 'Kriegsgeschmiedeter':
			lastName = generateRandomLastNameWarforged();
			break;
		case 'Leonid':
			lastName = generateRandomLastNameLeonin();
			break;
		case 'Loxodon':
			lastName = generateRandomLastNameLoxodon();
			break;
		case 'Minotaurus':
			lastName = generateRandomLastNameMinotaur();
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
