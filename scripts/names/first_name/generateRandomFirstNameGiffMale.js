function generateRandomFirstNameGiffMale() {
	const randomFirstName = giffFirstNameMale[Math.floor(Math.random() * giffFirstNameMale.length)];
	const randomRank = giffRank[Math.floor(Math.random() * giffRank.length)];
	const randomNickName = giffNickName[Math.floor(Math.random() * giffNickName.length)];
	const rank = randomRank.male;

	return rank + ' ' + randomFirstName + ' "' + randomNickName + '"';
}
