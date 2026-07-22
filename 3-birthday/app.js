
const user = {
  name: 'Vasia',
  birthday: '2002-01-01'
}

function validateAge(user) {
  const birthday = new Date(user.birthday);
  const now = new Date();
  const fourteenYearsAgo = new Date(
    now.getFullYear() - 14,
    now.getMonth(),
    now.getDate()
  );

  return birthday <= fourteenYearsAgo;
}
console.log(validateAge(user));
