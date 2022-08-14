class Character {
    constructor(name, type) {
        if (name.length > 2 && name.length < 10) {
            this.name = name;
            this.type = type;
            this.level = 1;
            this.health = 100;
        }
    }
    levelUp() {
        if (this.health > 0) {
            this.level++;
            this.attack += this.attack / 5;
            this.defense += this.defense / 5;
            this.health = 100;
        } else {
            return new Error("you cannot increase the level of the deceased");
        }
    }
    damage(points) {
        if (this.health > 0) {
            this.health -= points.attack * (1 - this.defense / 100);
        }
    }
    heroGenerator(){
    }
}
class Bowerman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        if (this.type.toLowerCase() === "bowerman") {
            this.attack = 25;
            this.defense = 25;
        } else {
            return new Error("hero type is incorrect");
        }
    }
}
class Swordsman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        if (this.type.toLowerCase() === "swordsman") {
            this.attack = 40;
            this.defense = 10;
        } else {
            return new Error("hero type is incorrect");
        }
    }
}
class Magician extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        if (this.type.toLowerCase() === "magician") {
            this.attack = 10;
            this.defense = 40;
        } else {
            return new Error("hero type is incorrect");
        }
    }
}
class Demon extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        if (this.type.toLowerCase() === "demon") {
            this.attack = 25;
            this.defense = 25;
        } else {
            return new Error("hero type is incorrect");
        }
    }
}
class Undead extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        if (this.type.toLowerCase() === "undead") {
            this.attack = 40;
            this.defense = 10;
        } else {
            return new Error("hero type is incorrect");
        }
    }
}
class Zombie extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        if (this.type.toLowerCase() === "zombie") {
            this.attack = 10;
            this.defense = 40;
        } else {
            return new Error("hero type is incorrect");
        }
    }
}
const zombie = new Zombie("Zombi", "Zombie");
const bowerman = new Bowerman("Boman", "Bowerman");
bowerman.levelUp();
zombie.levelUp();
bowerman.damage(zombie);
zombie.damage(bowerman);
console.log(zombie);
console.log(bowerman);