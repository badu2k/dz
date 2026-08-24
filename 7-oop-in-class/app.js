class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }
  say() {
    return 'говорить';
  }
}

class Orc extends Character {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }
  say() {
    return 'говорить специфично для Орка';
  }
  hit() {
    return `${this.name} наносит удар оружием: ${this.weapon}`;
  }
}

class Elf extends Character {
  constructor(race, name, language, spellType) {
    super(race, name, language);
    this.spellType = spellType;
  }
  say() {
    return 'говорить специфично для Эльфа';
  }
  createSpell() {
    return `${this.name} создает заклинание типа: ${this.spellType}`;
  }
}
const orc = new Orc('Орк', 'Шрек', 'Орочий', 'Дубина');
const elf = new Elf('Эльф', 'Ева', 'Эльфийский', 'Заморозка');
console.log(orc.say(), orc.hit());
console.log(elf.say(), elf.createSpell());