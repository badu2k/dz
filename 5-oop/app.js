function Character(race, name, lang) {
  this.race = race;
  this.name = name;
  this.lang = lang;
}

Character.prototype.speak = function() {
  console.log(`${this.name} говорит на языке: ${this.lang}`);
}
function Orc (race, name, language, weapon) {
  Character.call(this, race, name, language);
  this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.hit = function() {
  console.log(`${this.name} наносит удар оружием: ${this.weapon}`); 
}

function Elf(race, name, language, spellType) {
  Character.call(this, race, name, language);
  this.spellType = spellType;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function () {
  console.log(`${this.name} создает заклинание типа: ${this.spellType}`);
};

const orc = new Orc('Орк', 'Шрек', 'Орочий', 'Дубина');
const elf = new Elf('Эльф', 'Ева', 'Эльфийский', 'Заморозка');

orc.speak();
orc.hit();

elf.speak();
elf.createSpell();