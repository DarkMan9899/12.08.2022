class Character {
    constructor(name, type) {
        if (2 <= name.length && name.length <= 10) {
            this._name = name;
        } else {
            throw new Error('The name should be from 2 to 10 characters')
        }
        const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon',
            'Undead', 'Zombie']
        if (allowedTypes.includes(type)) {
            this._type = type;
        } else {
            throw new Error(`Sorry, allowed types of models are 'Bowman', 'Swordsman', 'Magician', 'Daemon',
    'Undead', 'Zombie'.
      'Please select one of these'`)
        }
        this._health = 100;
        this._level = 1;
        switch (type) {
            case 'Bowman':
                this._type = type;
                this._attack = 25;
                this._defense = 25;
                break;
            case 'Swordsman':
                this._type = type;
                this._attack = 40;
                this._defense = 10;
                break;
            case 'Magician':
                this._type = type;
                this._attack = 10;
                this._defense = 40;
                break;
            case 'Daemon':
                this._type = type;
                this._attack = 25;
                this._defense = 25;
                break;
            case 'Undead':
                this._type = type;
                this._attack = 40;
                this._defense = 10;
                break;
            case 'Zombie':
                this._type = type;
                this._attack = 10;
                this._defense = 40;
                break;
            default:
                throw new Error(`Sorry, allowed types of models are 'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'.
                       'Please select one of these'`)
        }

    }

    levelUp() {
        if (this._health !== 0) {
            this._level += 1;
            this._atack = this._atack + (this._atack * 20 / 100)
            this._defense = this._defense + (this._defense * 20 / 100)
        } else {
            throw new Error('Sorry, you cannot increase the level of the dead person')
        }
    }

    damage(points) {
        if (this._health === 0) {
            throw new Error('The person is already dead')
        } else if (this._health < points * (1 - this._defense / 100)) {
            this._health = 0;
        } else {
            this._health -= points * (1 - this._defense / 100);
        }
    }

}

 class Bowerman extends Character {
     constructor(name) {
        super(name)
         this._type = 'Bowman';
       this._atack = 25;
        this._defense = 25;
     }
 }

 class Swordsman extends Character {
     constructor(name) {
        super(name)
       this._type = 'Swordsman';
        this._atack = 40;
        this._defense = 10;
    }
 }
 class Magician extends Character {
     constructor(name) {
        super(name)
        this._type = 'Magician';
         this._atack = 10;
         this._defense = 40;
    }
 }

 class Daemon extends Character {
     constructor(name) {
        super(name)
        this._type = 'Daemon';
         this._atack = 10;
         this._defense = 40;
     }
}

 class Undead extends Character {
    constructor(name) {
         super(name)
         this._type = 'Undead';
        this._tack = 25;
        this._defense = 25;
    }
 }

 class Zombie extends Character {
     constructor(name) {
         super(name)
         this._type = 'Zombie';
         this._attack = 40;
         this._defense = 10;
    }
}

 const bowerMan = new Bowerman('Gago');

 console.log(bowerMan);
 bowerMan.damage(50)
 bowerMan.damage(50)
 bowerMan.damage(50)
 bowerMan.damage(50)
 bowerMan.damage(50)
console.log(bowerMan)