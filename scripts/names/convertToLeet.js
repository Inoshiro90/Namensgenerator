function convertToLeet(name) {
	// Ersetzungsregeln für Leetspeak
	const leetMap = {
		A: '4',
		B: '8',
		C: 'c',
		D: 'd',
		E: '3',
		F: 'f',
		G: '6',
		H: '1-1',
		I: '1',
		J: '_7',
		K: 'k',
		L: 'l',
		M: '44',
		N: '/V',
		O: '0',
		P: 'p',
		Q: 'q',
		R: '12',
		S: '5',
		T: '7',
		U: 'u',
		V: 'V',
		W: 'VV',
		X: 'x',
		Y: 'y',
		Z: '7_',
		a: '4',
		b: '8',
		c: 'C',
		d: 'D',
		e: '3',
		f: 'F',
		g: 'G',
		h: '1-1',
		i: '1',
		j: '_7',
		k: 'K',
		l: 'L',
		m: '44',
		n: '/V',
		o: '0',
		p: 'P',
		q: 'Q',
		r: '12',
		s: '5',
		t: '7',
		u: 'U',
		v: 'V',
		w: 'VV',
		x: 'X',
		y: 'Y',
		z: '7_',
	};

	// Konvertierung des Namens in Leetspeak
	let leetName = '';
	for (let i = 0; i < name.length; i++) {
		let char = name[i];
		if (leetMap[char]) {
			if (char === char.toUpperCase()) {
				leetName += leetMap[char.toLowerCase()].toUpperCase();
			} else {
				leetName += leetMap[char.toLowerCase()];
			}
		} else {
			leetName += char; // Zeichen beibehalten, wenn keine Übereinstimmung gefunden wurde
		}
	}
	return leetName;
}
