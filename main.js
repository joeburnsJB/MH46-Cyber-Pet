// import pet subclasses
import "./rock.js";
import "./cat.js";
import "./dragon.js";

const tickLength = 10000;

// game state object
const gameState = {
    pet: {},
    
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
    },

    input (event) {
        // code to take user input from buttons and apply it to the game state
    }
}

// main game update function