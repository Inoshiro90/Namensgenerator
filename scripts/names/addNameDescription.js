// Diese Funktion fügt eine Beschreibung für das ausgewählte Volk hinzu
function addRaceDescription() {
	// Erhalte den ausgewählten Wert aus dem Volk Dropdown-Menü
	const selectedRace = document.getElementById('raceDropdown').value;
	// Wähle den Container aus, in den die Beschreibung eingefügt werden soll
	const descriptionContainer = document.getElementById('container-description-names');
	// Erstelle eine leere Beschreibung
	let description = 'Ein zufälliges Volk und ggf. Sprachfamilie wird ausgesucht';

	// Überprüfe den ausgewählten Wert und füge die entsprechende Beschreibung hinzu
	switch (selectedRace) {
		case 'Zufall':
			description = 'Ein zufälliges Volk und ggf. Sprachfamilie wird ausgesucht';
			break;
		case 'Mensch - Zufall':
			description = 'Menschliche Namen mit zufälliger Sprachfamilie wird generiert.';
			break;
		case 'Mensch - Arabisch':
			description =
			`Arabischklingende Namen werden generiert.<br>Männliche Beispielnamen: Jakeem Ban Tanhowad, Hatalib Nori, Bamir Akbari, Yayaad Adiyin, Kasour Basin<br>Weibliche Beispielnamen: Nura Jusar, Tadina Hiredi, Natira al-Haddili, Sadira Belsemich, Sama Haso`;
			break;
		case 'Mensch - Bantuisch':
			description = 'Beschreibung Mensch - Bantuisch';
			break;
		case 'Mensch - Keltisch':
			description = 'Beschreibung Mensch - Keltisch';
			break;
		case 'Mensch - Chinesisch':
			description = 'Beschreibung Mensch - Chinesisch';
			break;
		case 'Mensch - Ägyptisch':
			description = 'Beschreibung Mensch - Ägyptisch';
			break;
		case 'Mensch - Germanisch':
			description = 'Beschreibung Mensch - Germanisch';
			break;
		case 'Mensch - Griechisch':
			description = 'Beschreibung Mensch - Griechisch';
			break;
		case 'Mensch - Indisch':
			description = 'Beschreibung Mensch - Indisch';
			break;
		case 'Mensch - Japanisch':
			description = 'Beschreibung Mensch - Japanisch';
			break;
		case 'Mensch - Meso-Amerikanisch':
			description = 'Beschreibung Mensch - Meso-Amerikanisch';
			break;
		case 'Mensch - Persisch':
			description = 'Beschreibung Mensch - Persisch';
			break;
		case 'Mensch - Polynesisch':
			description = 'Beschreibung Mensch - Polynesisch';
			break;
		case 'Mensch - Romanisch':
			description = 'Beschreibung Mensch - Romanisch';
			break;
		case 'Mensch - Skandinavisch':
			description = 'Beschreibung Mensch - Skandinavisch';
			break;
		case 'Mensch - Slawisch':
			description = 'Beschreibung Mensch - Slawisch';
			break;
		case 'Zwerg':
			description = 'Beschreibung Zwerg';
			break;
		case 'Elf':
			description = 'Beschreibung Elf';
			break;
		case 'Halbling':
			description = 'Beschreibung Halbling';
			break;
		case 'Gnom':
			description = 'Beschreibung Gnom';
			break;
		case 'Halbelf':
			description = 'Beschreibung Halbelf';
			break;
		case 'Halbork':
			description = 'Beschreibung Halbork';
			break;
		case 'Drachenblütiger':
			description = 'Beschreibung Drachenblütiger';
			break;
		case 'Tiefling':
			description = 'Beschreibung Tiefling';
			break;
		case 'Aasimar':
			description = 'Beschreibung Aasimar';
			break;
		case 'Aarakocra':
			description = 'Beschreibung Aarakocra';
			break;
		case 'Duergar':
			description = 'Beschreibung Duergar';
			break;
		case 'Echsenmensch':
			description = 'Beschreibung Echsenmensch';
			break;
		case 'Firbolg':
			description = 'Beschreibung Firbolg';
			break;
		case 'Githyanki':
			description = 'Beschreibung Githyanki';
			break;
		case 'Githzerai':
			description = 'Beschreibung Githzerai';
			break;
		case 'Goblin':
			description = 'Beschreibung Goblin';
			break;
		case 'Goliath':
			description = 'Beschreibung Goliath';
			break;
		case 'Grottenschrat':
			description = 'Beschreibung Grottenschrat';
			break;
		case 'Hobgoblin':
			description = 'Beschreibung Hobgoblin';
			break;
		case 'Kenku':
			description = 'Beschreibung Kenku';
			break;
		case 'Kalashtar':
			description = 'Beschreibung Kalashtar';
			break;
		case 'Kobold':
			description = 'Beschreibung Kobold';
			break;
		case 'Echsenmenschen':
			description = 'Beschreibung Echsenmenschen';
			break;
		case 'Ork':
			description = 'Beschreibung Ork';
			break;
		case 'Tabaxi':
			description = 'Beschreibung Tabaxi';
			break;
		case 'Triton':
			description = 'Beschreibung Triton';
			break;
		case 'Yuan-Ti':
			description = 'Beschreibung Yuan-Ti';
			break;
		case 'Kriegsgeschmiedeter':
			description = 'Beschreibung Kriegsgeschmiedete';
			break;
		default:
			description = 'Es wurde keine Beschreibung gefunden.';
	}

	// Füge die Beschreibung dem Container hinzu
	document.getElementById('descriptionNames').innerHTML = '<p>' + description + '</p>';
}
