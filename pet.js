class Pet {
    asleep = false;
    health = 100;
    hunger = 0;
    happiness = 50;
    bond = 0;
    energy = 100;
    hygiene = 100;

    hungerMod = 1;
    happinessMod = 1;
    bondMod = 1;
    energyMod = 1;
    hygieneMod = 1;
    
    constructor(name) {
        this.name = name;
    }

    update() {
        this.hunger += (1 * this.hungerMod);
        this.energy -= (1 * this.energyMod);
        
    }

    eat() {
        if (this.hunger > 40) {
            this.hunger -= 40;
        }
        else {
            this.hunger = 0;
        }
        // can put line here to change text in the HTML saying that the pet ate
        // for example --->  petMessage.textContent = `${this.name} ate!)`;
    }

    play() {
        if (this.happiness < 80) {
            this.happiness += 20;
        }
        else {
            this.happiness = 100;
        }
        // can put line here to change text in the HTML saying that the pet played
    }

    sleep() {
        this.asleep = true;
        setTimeout(() => {
            this.asleep = false;
        }, (Math.floor((Math.random() * 30000) + 60000)));
    }

    defecate() {
        // random time after eating pet will defecate, will increase dirtiness levels
    }

    clean() {
        this.hygiene = 100;
    }

    kill() {
        // when health reaches 0, die
    }
}
