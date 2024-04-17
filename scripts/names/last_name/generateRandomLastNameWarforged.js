function generateRandomLastNameWarforged(warforgedGreekAlphabet) {
	// Funktion zur Generierung einer Zahl zwischen min und max mit drei Ziffern
	function generateRandomDesignationNumber3Digits(min, max) {
		const num = Math.floor(Math.random() * (max - min + 1)) + min;
		// Füge führende Nullen hinzu, wenn die Zahl weniger als drei Stellen hat
		return num.toString().padStart(3, '0');
	}

	// Funktion zur Generierung einer Zahl zwischen min und max mit zwei Ziffern
	function generateRandomDesignationNumber2Digits(min, max) {
		const num = Math.floor(Math.random() * (max - min + 1)) + min;
		// Füge führende Nullen hinzu, wenn die Zahl weniger als drei Stellen hat
		return num.toString().padStart(2, '0');
	}

	// Funktion zur Generierung einer Zahl zwischen min und max mit einer Ziffer
	function generateRandomDesignationNumber1Digit(min, max) {
		const num = Math.floor(Math.random() * (max - min + 1)) + min;
		// Füge führende Nullen hinzu, wenn die Zahl weniger als drei Stellen hat
		return num.toString().padStart(1, '0');
	}

	// Funktion zur Generierung eines zufälligen Buchstabens
	function generateRandomDesignationLetter() {
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}

	// Funktion zur Auswahl eines griechischen Buchstaben
	function generateRandomDesignationGreekLetter() {
		const greekAlphabet = getRandomElement([
			'ALPHA',
			'BETA',
			'GAMMA',
			'DELTA',
			'EPSILON',
			'ZETA',
			'ETA',
			'THETA',
			'IOTA',
			'KAPPA',
			'LAMBDA',
			'MY',
			'NY',
			'XI',
			'OMIKRON',
			'PI',
			'RHO',
			'SIGMA',
			'TAU',
			'YPSILON',
			'PHI',
			'CHI',
			'PSI',
			'OMEGA',
		]);
		return greekAlphabet;
	}
	// Funktion zur Auswahl eines griechischen Buchstaben
	function generateRandomSpecialCharacter() {
		const specialCharacter = getRandomElement(['/', ':', '.', '-', '_']);
		return specialCharacter;
	}

	// Generiere die einzelnen Teile der Kennung
	const number1 = generateRandomDesignationNumber3Digits(1, 999);
	const number2 = generateRandomDesignationNumber2Digits(1, 99);
	const number3 = generateRandomDesignationNumber2Digits(1, 99);
	const number4 = generateRandomDesignationNumber1Digit(1, 99);
	const number5 = generateRandomDesignationNumber1Digit(1, 99);
	const number6 = generateRandomDesignationNumber1Digit(1, 99);
	const number7 = generateRandomDesignationNumber1Digit(1, 99);

	const letter1 = generateRandomDesignationLetter();
	const letter2 = generateRandomDesignationLetter();
	const letter3 = generateRandomDesignationLetter();
	const letter4 = generateRandomDesignationLetter();
	const letter5 = generateRandomDesignationLetter();
	const letter6 = generateRandomDesignationLetter();
	const letter7 = generateRandomDesignationLetter();
	const letter8 = generateRandomDesignationLetter();
	const letter9 = generateRandomDesignationLetter();
	const letter10 = generateRandomDesignationLetter();

	const greekletter1 = generateRandomDesignationGreekLetter();
	const greekletter2 = generateRandomDesignationGreekLetter();
	const greekletter3 = generateRandomDesignationGreekLetter();

	const specialCharacter1 = generateRandomSpecialCharacter();
	const specialCharacter2 = generateRandomSpecialCharacter();
	const specialCharacter3 = generateRandomSpecialCharacter();

// Kombiniere die generierten Teile, um die Kennung zu erstellen
const lastName = getRandomElement([
    // Numerisch-Buchstaben-Kombinationen mit Zahlen
    getRandomElement([
        `${number1}${specialCharacter1}${letter1}${specialCharacter2}${number2}`,
        `${letter1}${letter2}${specialCharacter1}${number4}`,
        `${letter1}${specialCharacter1}${number2}${letter2}${specialCharacter3}${letter3}`,
        `${number1}${specialCharacter1}${number2}${specialCharacter2}${number3}`,
        `${number2}${number3}${letter1}${number4}`,
    ]),
    // Griechische Buchstaben mit Zahlen und Buchstaben
    getRandomElement([
        `${greekletter1}${specialCharacter1}${number1}${specialCharacter2}${letter1}`,
        `${greekletter1}${specialCharacter1}${letter1}${number4}`,
        `${greekletter1}${specialCharacter1}${number2}${letter1}`,
        `${greekletter1}${number1}${letter1}${specialCharacter2}${number2}`,
        `${greekletter1}${specialCharacter1}${letter1}${specialCharacter2}${number2}`,
    ]),
    // Buchstabenkombinationen mit einer Zahl
    getRandomElement([
        `${letter1}${number1}`,
        `${letter1}${number1}${letter2}${letter3}`,
        `${letter1}${number2}${letter2}`,
        `${letter1}${specialCharacter1}${number2}${letter2}`,
        `${letter1}${specialCharacter1}${letter2}${number2}${letter3}`,
    ]),
    // Buchstabenkombinationen mit mehreren Zeichen
    getRandomElement([
        `${number2}${letter1}${letter2}${number4}`,
        `${letter1}${specialCharacter1}${number2}${letter2}`,
        `${letter1}${number2}${specialCharacter1}${letter2}${number1}`,
        `${letter1}${number2}${letter2}${letter3}${letter4}${number3}`,
        `${letter1}${specialCharacter1}${number2}${letter2}${number1}`,
    ]),
    // Buchstabenkombinationen mit mehreren Zahlen
    getRandomElement([
        `${letter1}${letter2}${specialCharacter1}${number2}`,
        `${letter1}${letter2}${letter3}${specialCharacter1}${number2}`,
        `${letter1}${letter2}${letter3}${letter4}${specialCharacter1}${number2}`,
        `${letter1}${letter2}${specialCharacter1}${number1}${specialCharacter2}${number2}`,
        `${letter1}${letter2}${letter3}${specialCharacter1}${number1}${specialCharacter2}${number2}`,
    ]),
]);
	return lastName;
}
