function generateFirstName(gender, race, region) {
	let firstName;
	switch (gender) {
		case 'männlich':
			switch (race) {
				case 'Mensch':
					firstName = generateRandomFirstNameHumanMale(region);
					break;
				case 'Zwerg':
					firstName = generateRandomFirstNameDwarfMale();
					break;
				case 'Elf':
				case 'Astralelf':
				case 'Blasself':
				case 'Drow':
				case 'Eladrin':
				case 'Meereself':
				case 'Schadar-Kai':
					firstName = generateRandomFirstNameElfMale();
					break;
				case 'Halbling':
					firstName = generateRandomFirstNameHalflingMale();
					break;
				case 'Gnom':
					firstName = generateRandomFirstNameGnomeMale();
					break;
				case 'Halbelf':
					let humanSociety = Math.random() < 0.5;
					if (humanSociety) {
						firstName = generateRandomFirstNameHumanMale(region);
					} else {
						firstName = generateRandomFirstNameElfMale();
					}
					break;
				case 'Halbork':
					firstName = generateRandomFirstNameHalfOrcMale();
					break;
				case 'Drachenblütiger':
					firstName = generateRandomFirstNameDragonbornMale();
					break;
				case 'Tiefling':
					firstName = generateRandomFirstNameTieflingMale();
					break;
				case 'Aasimar':
					firstName = generateRandomFirstNameHumanMale(region);
					break;
				case 'Aarakocra':
					firstName = generateRandomFirstNameAarakocra();
					break;
				case 'Duergar':
					firstName = generateRandomFirstNameDwarfMale();
					break;
				case 'Echsenmensch':
					firstName = generateRandomFirstNameLizardfolk();
					break;
				case 'Firbolg':
					firstName = generateRandomFirstNameElfMale();
					break;
				case 'Githyanki':
					firstName = generateRandomFirstNameGithyankiMale();
					break;
				case 'Githzerai':
					firstName = generateRandomFirstNameGithzeraiMale();
					break;
				case 'Goblin':
				case 'Grottenschrat':
				case 'Hobgoblin':
					firstName = generateRandomFirstNameGoblinoidMale();
					break;
				case 'Goliath':
					firstName = generateRandomFirstNameGoliath();
					break;
				case 'Grung':
					firstName = generateRandomFirstNameGrung();
					break;
				case 'Harengon':
					firstName = generateRandomFirstNameHarengon();
					break;
				case 'Kalashtar':
					firstName = generateRandomFirstNameKalashtar();
					break;
				case 'Kenku':
					firstName = generateRandomFirstNameKenku();
					break;
				case 'Kriegsgeschmiedeter':
					firstName = generateRandomFirstNameWarforged();
					break;
				case 'Leonid':
					firstName = generateRandomFirstNameLeoninMale();
					break;
				case 'Loxodon':
					firstName = generateRandomFirstNameLoxodonMale();
					break;
				case 'Minotaurus':
					firstName = generateRandomFirstNameMinotaurMale();
					break;
				case 'Ork':
					firstName = generateRandomFirstNameOrcMale();
					break;
				case 'Simic-Hybrid':
					firstName = getRandomElement([
						generateRandomFirstNameElfMale(),
						generateRandomFirstNameVedalkenMale(),
					]);
					break;
				case 'Tabaxi':
					firstName = generateRandomFirstNameTabaxi();
					break;
				case 'Tiefengnom':
					firstName = generateRandomFirstNameDeepGnomeMale();
					break;
				case 'Triton':
					firstName = generateRandomFirstNameTritonMale();
					break;
				case 'Vedalken':
					firstName = generateRandomFirstNameVedalkenMale();
					break;
				default:
					console.error('Ungültiges Volk des Autors:', race);
			}
			break;
		case 'weiblich':
			switch (race) {
				case 'Mensch':
					firstName = generateRandomFirstNameHumanFemale(region);
					break;
				case 'Zwerg':
					firstName = generateRandomFirstNameDwarfFemale();
					break;
				case 'Elf':
				case 'Astralelf':
				case 'Blasself':
				case 'Drow':
				case 'Eladrin':
				case 'Meereself':
				case 'Schadar-Kai':
					firstName = generateRandomFirstNameElfFemale();
					break;
				case 'Halbling':
					firstName = generateRandomFirstNameHalflingFemale();
					break;
				case 'Gnom':
					firstName = generateRandomFirstNameGnomeFemale();
					break;
				case 'Halbelf':
					let humanSociety = Math.random() < 0.5;
					if (humanSociety) {
						firstName = generateRandomFirstNameHumanFemale(region);
					} else {
						firstName = generateRandomFirstNameElfFemale();
					}
					break;
				case 'Halbork':
					firstName = generateRandomFirstNameHalfOrcFemale();
					break;
				case 'Drachenblütiger':
					firstName = generateRandomFirstNameDragonbornFemale();
					break;
				case 'Tiefling':
					firstName = generateRandomFirstNameTieflingFemale();
					break;
				case 'Aasimar':
					firstName = generateRandomFirstNameHumanFemale(region);
					break;
				case 'Aarakocra':
					firstName = generateRandomFirstNameAarakocra();
					break;
				case 'Duergar':
					firstName = generateRandomFirstNameDwarfFemale();
					break;
				case 'Firbolg':
					firstName = generateRandomFirstNameElfFemale();
					break;
				case 'Echsenmensch':
					firstName = generateRandomFirstNameLizardfolk();
					break;
				case 'Githyanki':
					firstName = generateRandomFirstNameGithyankiFemale();
					break;
				case 'Githzerai':
					firstName = generateRandomFirstNameGithzeraiFemale();
					break;
				case 'Goblin':
				case 'Grottenschrat':
				case 'Hobgoblin':
					firstName = generateRandomFirstNameGoblinoidFemale();
					break;
				case 'Goliath':
					firstName = generateRandomFirstNameGoliath();
					break;
				case 'Grung':
					firstName = generateRandomFirstNameGrung();
					break;
				case 'Harengon':
					firstName = generateRandomFirstNameHarengon();
					break;
				case 'Kalashtar':
					firstName = generateRandomFirstNameKalashtar();
					break;
				case 'Kenku':
					firstName = generateRandomFirstNameKenku();
					break;
				case 'Kriegsgeschmiedeter':
					firstName = generateRandomFirstNameWarforged();
					break;
				case 'Leonid':
					firstName = generateRandomFirstNameLeoninFemale();
					break;
				case 'Loxodon':
					firstName = generateRandomFirstNameLoxodonFemale();
					break;
				case 'Minotaurus':
					firstName = generateRandomFirstNameMinotaurFemale();
					break;
				case 'Ork':
					firstName = generateRandomFirstNameOrcFemale();
					break;
				case 'Simic-Hybrid':
					firstName = getRandomElement([
						generateRandomFirstNameElfFemale(),
						generateRandomFirstNameVedalkenFemale(),
					]);
					break;
				case 'Tabaxi':
					firstName = generateRandomFirstNameTabaxi();
					break;
				case 'Tiefengnom':
					firstName = generateRandomFirstNameDeepGnomeFemale();
					break;
				case 'Triton':
					firstName = generateRandomFirstNameTritonFemale();
					break;
				case 'Vedalken':
					firstName = generateRandomFirstNameVedalkenFemale();
					break;
				default:
					console.error('Ungültiges Volk des Autors:', race);
			}
			break;
		case 'nicht-binär':
			switch (race) {
				case 'Mensch':
					firstName = generateRandomFirstNameHumanNonBinary(region);
					break;
				case 'Zwerg':
					firstName = generateRandomFirstNameDwarfNonBinary();
					break;
				case 'Elf':
				case 'Astralelf':
				case 'Blasself':
				case 'Drow':
				case 'Eladrin':
				case 'Meereself':
				case 'Schadar-Kai':
					firstName = generateRandomFirstNameElfNonBinary();
					break;
				case 'Halbling':
					firstName = generateRandomFirstNameHalflingNonBinary();
					break;
				case 'Gnom':
					firstName = generateRandomFirstNameGnomeNonBinary();
					break;
				case 'Halbelf':
					let humanSociety = Math.random() < 0.5;
					if (humanSociety) {
						firstName = generateRandomFirstNameHumanNonBinary(region);
					} else {
						firstName = generateRandomFirstNameElfNonBinary();
					}
					break;
				case 'Halbork':
					firstName = generateRandomFirstNameHalfOrcNonBinary();
					break;
				case 'Drachenblütiger':
					firstName = generateRandomFirstNameDragonbornNonBinary();
					break;
				case 'Tiefling':
					firstName = generateRandomFirstNameTieflingNonBinary();
					break;
				case 'Aasimar':
					firstName = generateRandomFirstNameHumanNonBinary(region);
					break;
				case 'Aarakocra':
					firstName = generateRandomFirstNameAarakocra();
					break;
				case 'Duergar':
					firstName = generateRandomFirstNameDwarfNonBinary();
					break;
				case 'Firbolg':
					firstName = generateRandomFirstNameElfNonBinary();
					break;
				case 'Echsenmensch':
					firstName = generateRandomFirstNameLizardfolk();
					break;
				case 'Githyanki':
					firstName = generateRandomFirstNameGithyankiNonBinary();
					break;
				case 'Githzerai':
					firstName = generateRandomFirstNameGithzeraiNonBinary();
					break;
				case 'Goblin':
				case 'Grottenschrat':
				case 'Hobgoblin':
					firstName = generateRandomFirstNameGoblinoidNonBinary();
					break;
				case 'Goliath':
					firstName = generateRandomFirstNameGoliath();
					break;
				case 'Grung':
					firstName = generateRandomFirstNameGrung();
					break;
				case 'Harengon':
					firstName = generateRandomFirstNameHarengon();
					break;
				case 'Kalashtar':
					firstName = generateRandomFirstNameKalashtar();
					break;
				case 'Kenku':
					firstName = generateRandomFirstNameKenku();
					break;
				case 'Kriegsgeschmiedeter':
					firstName = generateRandomFirstNameWarforged();
					break;
				case 'Leonid':
					firstName = generateRandomFirstNameLeoninNonBinary();
					break;
				case 'Loxodon':
					firstName = generateRandomFirstNameLoxodonNonBinary();
					break;
				case 'Minotaurus':
					firstName = generateRandomFirstNameMinotaurNonBinary();
					break;
				case 'Ork':
					firstName = generateRandomFirstNameOrcNonBinary();
					break;
				case 'Simic-Hybrid':
					firstName = getRandomElement([
						generateRandomFirstNameElfNonBinary(),
						generateRandomFirstNameVedalkenNonBinary(),
					]);
					break;
				case 'Tabaxi':
					firstName = generateRandomFirstNameTabaxi();
					break;
				case 'Tiefengnom':
					firstName = generateRandomFirstNameDeepGnomeNonBinary();
					break;
				case 'Triton':
					firstName = generateRandomFirstNameTritonNonBinary();
					break;
				case 'Vedalken':
					firstName = generateRandomFirstNameVedalkenNonBinary();
					break;
				default:
					console.error('Ungültiges Volk des Autors:', race);
			}
			break;

		default:
			console.error('Ungültiges Geschlecht des Autors:', gender);
	}
	return firstName;
}
