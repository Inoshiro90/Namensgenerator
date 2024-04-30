function generateLastName(gender, race, region, firstName) {
	let lastName;
	switch (race) {
		case 'Mensch':
			lastName = generateRandomLastNameHuman(region);
			break;
		case 'Zwerg':
			lastName = generateRandomLastNameDwarf();
			break;
		case 'Elf':
		case 'Astralelf':
		case 'Blasself':
		case 'Drow':
		case 'Eladrin':
		case 'Meereself':
		case 'Schadar-Kai':
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
		case 'Hadozee':
			lastName = generateRandomLastNameHadozee(gender);
			break;
		case 'Harengon':
			lastName = generateRandomLastNameHarengon();
			break;
		case 'Firbolg':
			lastName = generateRandomLastNameFirbolg();
			break;
		case 'Echsenmensch':
			lastName = generateRandomLastNameLizardfolk();
			break;
		case 'Fee':
			lastName = generateRandomLastNameFairy();
			break;
		case 'Luftgenasi':
			lastName = generateRandomLastNameGenasiAir();
			break;
		case 'Erdgenasi':
			lastName = generateRandomLastNameGenasiEarth();
			break;
		case 'Feuergenasi':
			lastName = generateRandomLastNameGenasiFire();
			break;
		case 'Wassergenasi':
			lastName = generateRandomLastNameGenasiWater();
			break;
		case 'Giff':
			lastName = generateRandomLastNameGiff();
			break;
		case 'Goliath':
			lastName = generateRandomLastNameGoliath();
			break;
		case 'Kalashtar':
			lastName = generateRandomLastNameKalashtar(firstName);
			break;
		case 'Kender':
			lastName = generateRandomLastNameKender();
			break;
		case 'Kenku':
			lastName = generateRandomLastNameKenku();
			break;
		case 'Kriegsgeschmiedeter':
			lastName = generateRandomLastNameWarforged();
			break;
		case 'Kobold':
			lastName = generateRandomLastNameKobold();
			break;
		case 'Leonid':
			lastName = generateRandomLastNameLeonin();
			break;
		case 'Locathah':
			lastName = generateRandomLastNameLocathah();
			break;
		case 'Loxodon':
			lastName = generateRandomLastNameLoxodon();
			break;
		case 'Minotaurus':
			lastName = generateRandomLastNameMinotaur();
			break;
		case 'Ork':
			lastName = generateRandomLastNameHalfOrc();
			break;
		case 'Plasmoider':
			lastName = generateRandomLastNamePlasmoid();
			break;
		case 'Satyr':
			lastName = generateRandomLastNameSatyr();
			break;
		case 'Simic-Hybrid':
			lastName = getRandomElement([
				generateRandomLastNameElf(),
				generateRandomLastNameVedalken(),
			]);
			break;
		case 'Tabaxi':
			lastName = generateRandomLastNameTabaxi();
			break;
		case 'Tiefengnom':
			lastName = generateRandomLastNameDeepGnome();
			break;
		case 'Triton':
			lastName = generateRandomLastNameTriton();
			break;
		case 'Vedalken':
			lastName = generateRandomLastNameVedalken();
			break;
		default:
			console.error('Ungültiges Volk des Autors:', race);
	}
	return lastName;
}
