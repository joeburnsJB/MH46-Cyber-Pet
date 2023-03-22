class Pet {
    asleep = false;
    
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 0;
        this.happiness = 50;
        this.bond = 0;
        this.energy = 100;
        this.hygiene = 100;
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
