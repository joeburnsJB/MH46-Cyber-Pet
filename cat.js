// subclass for cat pet
import "./pet.js";

class Cat extends Pet {
    constructor(name) {
        super(name, health, hunger, happiness);
        this.hunger = 50;
    }
}