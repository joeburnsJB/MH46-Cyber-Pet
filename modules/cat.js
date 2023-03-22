// subclass for cat pet
import Pet from "./pet.js";

export default class Cat extends Pet {
    constructor(name) {
        super(name, health, hunger, happiness, bond, energy, hygiene);
        this.hunger = 50;
        this.energy = 50;
    }
}