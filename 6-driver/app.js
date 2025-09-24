const hasLicence = true;
const age = 90;
const isDrunk = false;

console.log(`${hasLicence && age>=18 && !isDrunk ? 'Пользователь может водить авто' : 'Пользователь не может водить авто'}`);