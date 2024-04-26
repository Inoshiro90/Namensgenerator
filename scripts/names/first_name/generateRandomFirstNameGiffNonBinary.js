function generateRandomFirstNameGiffNonBinary() {
	const randomFirstName =
		giffFirstNameNonBinary[Math.floor(Math.random() * giffFirstNameNonBinary.length)];
	const randomRank = giffRank[Math.floor(Math.random() * giffRank.length)];
	const randomNickName = giffNickName[Math.floor(Math.random() * giffNickName.length)];
	const rank = randomRank.nonBinary;

	return rank + ' ' + randomFirstName + ' "' + randomNickName + '"';
}
