// subclass for cat pet
import "./modules/pet.js";

class Cat extends Pet {
    constructor(name) {
        super(name, health, hunger, happiness, bond, energy, hygiene);
        this.hunger = 50;
        this.energy = 50;
    }
}