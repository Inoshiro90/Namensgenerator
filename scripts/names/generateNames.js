function generateNames() {
	// Zum Beispiel könntest du eine Schleife verwenden, um die generierten Namen anzuzeigen
	document.getElementById('nameGeneratorForm').addEventListener('submit', function (event) {
		event.preventDefault();

		let numberOfNames = document.getElementById('numberOfNames').value;
		let selectedNameType = document.getElementById('nameTypeDropdown').value;
		let generatedNamesHTML = '';
		let generatedNames = [];

		for (let i = 0; i < numberOfNames; i++) {
			let selectedRace = document.getElementById('raceDropdown').value;
			let selectedGender = document.getElementById('genderDropdown').value;
			let gender;
			let race;
			let region;

			// Wenn das Volk "Zufall" ist, rufe generateRandomRace() auf, ansonsten Weise den entsprechenden Wert zu
			if (selectedRace === 'Zufall') {
				race = generateRandomRace();
			} else {
				switch (selectedRace) {
					case 'Mensch - Zufall':
					case 'Mensch - Arabisch':
					case 'Mensch - Bantuisch':
					case 'Mensch - Keltisch':
					case 'Mensch - Chinesisch':
					case 'Mensch - Ägyptisch':
					case 'Mensch - Germanisch':
					case 'Mensch - Griechisch':
					case 'Mensch - Indisch':
					case 'Mensch - Japanisch':
					case 'Mensch - Meso-Amerikanisch':
					case 'Mensch - Persisch':
					case 'Mensch - Polynesisch':
					case 'Mensch - Romanisch':
					case 'Mensch - Skandinavisch':
					case 'Mensch - Slawisch':
						race = 'Mensch';
						break;
					case 'Halbelf':
						race = 'Halbelf';
						break;
					case 'Tiefling':
						race = 'Tiefling';
						break;
					case 'Zwerg':
						race = 'Zwerg';
						break;
					case 'Elf':
						race = 'Elf';
						break;
					case 'Halbling':
						race = 'Halbling';
						break;
					case 'Gnom':
						race = 'Gnom';
						break;
					case 'Halbork':
						race = 'Halbork';
						break;
					case 'Drachenblütiger':
						race = 'Drachenblütiger';
						break;
					case 'Aasimar':
						race = 'Aasimar';
						break;
					case 'Aarakocra':
						race = 'Aarakocra';
						break;
					case 'Astralelf':
						race = 'Astralelf';
						break;
					case 'Autognom':
						race = 'Autognom';
						break;
					case 'Blasself':
						race = 'Blasself';
						break;
					case 'Duergar':
						race = 'Duergar';
						break;
					case 'Drow':
						race = 'Drow';
						break;
					case 'Eladrin':
						race = 'Eladrin';
						break;
					case 'Fee':
						race = 'Fee';
						break;
					case 'Luftgenasi':
						race = 'Luftgenasi';
						break;
					case 'Erdgenasi':
						race = 'Erdgenasi';
						break;
					case 'Feuergenasi':
						race = 'Feuergenasi';
						break;
					case 'Wassergenasi':
						race = 'Wassergenasi';
						break;
					case 'Giff':
						race = 'Giff';
						break;
					case 'Githyanki':
						race = 'Githyanki';
						break;
					case 'Githzerai':
						race = 'Githzerai';
						break;
					case 'Goblin':
						race = 'Goblin';
						break;
					case 'Grottenschrat':
						race = 'Grottenschrat';
						break;
					case 'Hadozee':
						race = 'Hadozee';
						break;
					case 'Harengon':
						race = 'Harengon';
						break;
					case 'Hobgoblin':
						race = 'Hobgoblin';
						break;
					case 'Echsenmensch':
						race = 'Echsenmensch';
						break;
					case 'Firbolg':
						race = 'Firbolg';
						break;
					case 'Goliath':
						race = 'Goliath';
						break;
					case 'Grung':
						race = 'Grung';
						break;
					case 'Kender':
						race = 'Kender';
						break;
					case 'Kenku':
						race = 'Kenku';
						break;
					case 'Kalashtar':
						race = 'Kalashtar';
						break;
					case 'Kriegsgeschmiedeter':
						race = 'Kriegsgeschmiedeter';
						break;
					case 'Kobold':
						race = 'Kobold';
						break;
					case 'Leonid':
						race = 'Leonid';
						break;
					case 'Locathah':
						race = 'Locathah';
						break;
					case 'Loxodon':
						race = 'Loxodon';
						break;
					case 'Minotaurus':
						race = 'Minotaurus';
						break;
					case 'Meereself':
						race = 'Meereself';
						break;
					case 'Ork':
						race = 'Ork';
						break;
					case 'Plasmoider':
						race = 'Plasmoider';
						break;
					case 'Satyr':
						race = 'Satyr';
						break;
					case 'Schadar-Kai':
						race = 'Schadar-Kai';
						break;
					case 'Simic-Hybrid':
						race = 'Simic-Hybrid';
						break;
					case 'Tabaxi':
						race = 'Tabaxi';
						break;
					case 'Thri-Kreen':
						race = 'Thri-Kreen';
						break;
					case 'Tiefengnom':
						race = 'Tiefengnom';
						break;
					case 'Tortle':
						race = 'Tortle';
						break;
					case 'Triton':
						race = 'Triton';
						break;
					case 'Uhle':
						race = 'Uhle';
						break;
					case 'Vedalken':
						race = 'Vedalken';
						break;
					case 'Verdan':
						race = 'Verdan';
						break;
					case 'Wandler':
						race = 'Wandler';
						break;
					case 'Wechselbalg':
						race = 'Wechselbalg';
						break;
					case 'Yuan-Ti':
						race = 'Yuan-Ti';
						break;
					case 'Zentaur':
						race = 'Zentaur';
						break;
					default:
						console.error('Ungültiges Volk: ' + selectedRace);
						break;
				}
			}

			// Wenn das Volk "raceRandom", "humanRandom", "halfElf" oder "tiefling" ist, rufe generateRandomRace() auf, ansonsten Weise den entsprechenden Wert zu
			if (
				selectedRace === 'Zufall' ||
				selectedRace === 'Mensch - Zufall' ||
				selectedRace === 'Halbelf' ||
				selectedRace === 'Tiefling' ||
				selectedRace === 'Aasimar'
			) {
				region = generateRandomRegion();
			} else {
				switch (selectedRace) {
					case 'Mensch - Arabisch':
						region = 'arabisch';
						break;
					case 'Mensch - Bantuisch':
						region = 'bantuisch';
						break;
					case 'Mensch - Keltisch':
						region = 'keltisch';
						break;
					case 'Mensch - Chinesisch':
						region = 'chinesisch';
						break;
					case 'Mensch - Ägyptisch':
						region = 'ägyptisch';
						break;
					case 'Mensch - Germanisch':
						region = 'germanisch';
						break;
					case 'Mensch - Griechisch':
						region = 'griechisch';
						break;
					case 'Mensch - Indisch':
						region = 'indisch';
						break;
					case 'Mensch - Japanisch':
						region = 'japanisch';
						break;
					case 'Mensch - Meso-Amerikanisch':
						region = 'meso-amerikanisch';
						break;
					case 'Mensch - Persisch':
						region = 'persisch';
						break;
					case 'Mensch - Polynesisch':
						region = 'polynesisch';
						break;
					case 'Mensch - Romanisch':
						region = 'romanisch';
						break;
					case 'Mensch - Skandinavisch':
						region = 'skandinavisch';
						break;
					case 'Mensch - Slawisch':
						region = 'slawisch';
						break;
					case 'Zwerg':
					case 'Elf':
					case 'Halbling':
					case 'Gnom':
					case 'Halbork':
					case 'Drachenblütiger':
					case 'Aarakocra':
					case 'Astralelf':
					case 'Autognom':
					case 'Blasself':
					case 'Duergar':
					case 'Drow':
					case 'Eladrin':
					case 'Githyanki':
					case 'Githzerai':
					case 'Goblin':
					case 'Grottenschrat':
					case 'Hobgoblin':
					case 'Echsenmensch':
					case 'Fee':
					case 'Firbolg':
					case 'Luftgenasi':
					case 'Wassergenasi':
					case 'Feuergenasi':
					case 'Erdgenasi':
					case 'Giff':
					case 'Goliath':
					case 'Grung':
					case 'Hadozee':
					case 'Harengon':
					case 'Kalashtar':
					case 'Kender':
					case 'Kenku':
					case 'Kobold':
					case 'Kriegsgeschmiedeter':
					case 'Leonid':
					case 'Locathah':
					case 'Loxodon':
					case 'Meereself':
					case 'Minotaurus':
					case 'Ork':
					case 'Plasmoider':
					case 'Satyr':
					case 'Schadar-Kai':
					case 'Simic-Hybrid':
					case 'Tabaxi':
					case 'Thri-Kreen':
					case 'Tiefengnom':
					case 'Tortle':
					case 'Triton':
					case 'Uhle':
					case 'Vedalken':
					case 'Verdan':
					case 'Wandler':
					case 'Wechselbalg':
					case 'Yuan-Ti':
					case 'Zentaur':
						region = '';
						break;
					default:
						console.error('Ungültige Region: ' + selectedRace);
						break;
				}
			}

			// Wenn das Geschlecht "Zufall" ist, rufe generateRandomGender() auf, ansonsten weise entsprechenden Wert zu
			if (selectedGender === 'Zufall') {
				gender = generateRandomGender();
			} else {
				switch (selectedGender) {
					case 'Männlich':
						gender = 'männlich';
						break;
					case 'Weiblich':
						gender = 'weiblich';
						break;
					case 'Nicht-Binär':
						gender = 'nicht-binär';
						break;
					default:
						console.error('Ungültiges Geschlecht: ' + selectedGender);
						break;
				}
			}

			// Generate first and last name
			let firstName = generateFirstName(gender, race, region);
			let lastName = generateLastName(gender, race, region, firstName);

			// Hinzufügen des generierten Namens zum Array
			generatedNames.push(firstName + ' ' + lastName);

			// Erstellen der HTML-Ausgabe basierend auf dem ausgewählten Namenstyp
			switch (selectedNameType) {
				case 'Vorname':
					generatedNamesHTML += firstName + '<br>';
					break;
				case 'Nachname':
					generatedNamesHTML += lastName + '<br>';
					break;
				case 'Vorname und Nachname':
					generatedNamesHTML += firstName + ' ' + lastName + '<br>';
					break;
				default:
					console.error('Ungültiger Namestyp: ' + selectedNameType);
					break;
			}
		}

		// Anzeigen der generierten Namen
		document.getElementById('generatedNames').innerHTML = generatedNamesHTML;
	});
}
