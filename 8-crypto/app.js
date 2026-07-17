function simpleEncrypt(password) {
	const passMassive = password.split('');
	const reversed = passMassive.reverse();

	for (let i = 0; i < reversed.length - 1; i += 2) {
		[reversed[i], reversed[i + 1]] = [reversed[i + 1], reversed[i]];
	}
	return reversed.join('');
}

const result = simpleEncrypt('12345');
console.log(result);

function simpleCheck(encryptedPassword, passwordToCheck) {
	const passMassive = encryptedPassword.split('');
	for (let i = 0; i < passMassive.length - 1; i += 2) {
	[passMassive[i], passMassive[i + 1]] = [passMassive[i + 1], passMassive[i]];
}
	const original = passMassive.reverse().join('');
	return original === passwordToCheck;
}

const checking = simpleCheck('45231', '123451');
console.log(checking);