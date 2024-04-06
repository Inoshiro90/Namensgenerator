function generateRandomRegion() {
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	// Region basierend auf dem definierten Zahlenbereich auswählen

	region = getRandomElement([
		'germanisch',
		'slawisch',
		'romanisch',
		'skandinavisch',
		'keltisch',
		'griechisch',
		'arabisch',
		'persisch',
		'bantuisch',
		'ägyptisch',
		'meso-amerikanisch',
		'polynesisch',
		'indisch',
		'chinesisch',
		'japanisch',
	]);
	// console.log('Zufällige Region ist ' + region);
	return region;
}
