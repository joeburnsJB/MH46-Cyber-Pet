// import pet subclasses
import Rock from "./modules/rock.js";
import Cat from "./modules/cat.js";
import Dragon from "./modules/dragon.js";

const tickLength = 10000;

// game state object
const gameState = {
    initialise (petType, petName) {
        switch (petType) {
            case "Rock":
                this.pet = new Rock(petName);
                break;
            case "Cat":
                this.pet = new Cat(petName);
                break;
            case "Dragon":
                this.pet = new Dragon(petName);
                break;
        }

        setInterval(this.tick(), tickLength);
    },

    tick () {
        this.pet.update();
    }
}

// main game functions

