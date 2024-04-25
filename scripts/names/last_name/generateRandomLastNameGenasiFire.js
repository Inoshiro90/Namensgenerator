function generateRandomLastNameGenasiFire() {
	let lastName;

	const syllable1 =
		genasiLastNameFireSyllable1[Math.floor(Math.random() * genasiLastNameFireSyllable1.length)];
	let syllable2;

	do {
		syllable2 =
			genasiLastNameFireSyllable2[
				Math.floor(Math.random() * genasiLastNameFireSyllable2.length)
			];
	} while (
		syllable2 === syllable1 || // Überprüfen, ob syllable2 gleich syllable1 ist
		areSimilar(syllable1, syllable2) // Überprüfen, ob syllable2 zu ähnlich zu syllable1 ist
	);

	lastName = syllable1 + syllable2;

	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}

function areSimilar(syllable1, syllable2) {
	// Konvertiere beide Silben in Kleinbuchstaben, um den Vergleich zu erleichtern
	syllable1 = syllable1.toLowerCase();
	syllable2 = syllable2.toLowerCase();

	// Zähle die Anzahl der gleichen Buchstaben zwischen den beiden Silben
	let sameLettersCount = 0;
	for (let i = 0; i < syllable1.length; i++) {
		if (syllable2.includes(syllable1[i])) {
			sameLettersCount++;
		}
	}

	// Wenn die Anzahl der gleichen Buchstaben kleiner als die Länge einer Silbe minus 1 ist,
	// dann sind die Silben zu ähnlich
	return sameLettersCount >= syllable1.length - 1;
}
