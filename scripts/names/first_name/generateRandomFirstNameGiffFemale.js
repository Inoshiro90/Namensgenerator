function generateRandomFirstNameGiffFemale() {
	const randomFirstName =
		giffFirstNameFemale[Math.floor(Math.random() * giffFirstNameFemale.length)];
	const randomRank = giffRank[Math.floor(Math.random() * giffRank.length)];
	const randomNickName = giffNickName[Math.floor(Math.random() * giffNickName.length)];
	const rank = randomRank.female;

	return rank + ' ' + randomFirstName + ' "' + randomNickName + '"';
}
