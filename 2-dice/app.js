
function throwDice (dice) {
  const diceVariation = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];
  if (!diceVariation.includes(dice)) {
    throw new Error('Недопустимое значение кубика')
  }
  const diceNumber = Number(dice.slice(1));
  const randomNumber = Math.floor(Math.random() * diceNumber) + 1;
  return randomNumber;
}

const result = throwDice ('d6')
console.log(result);