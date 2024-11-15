'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

// ______________________________//

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

// ______________________________//

class Carnivore extends Animal {
  bite(bittenAnimal) {
    if (bittenAnimal.hidden !== true && bittenAnimal instanceof Herbivore) {
      bittenAnimal.health -= 50;
    }
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
