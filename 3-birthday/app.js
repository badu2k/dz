
function validateAge(userDay) {
  const birthday = new Date(userDay);
  const now = new Date();
  let age = now.getFullYear() - birthday.getFullYear();

  const monthDiff = now.getMonth() - birthday.getMonth();
  const dayDiff = now.getDate() - birthday.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
}
console.log(validateAge('2022-01-01'));
