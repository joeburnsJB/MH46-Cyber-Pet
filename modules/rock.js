// subclass for rock pet
import Pet from "./pet.js";

export default class Rock extends Pet {
    constructor(name) {
        super(name);
        this.moss = 0;
    }

    update() {
        this.moss += 1;
        console.log(this);
    }

    play() {
        if (this.happiness < 80) {
            this.happiness += 20;
        }
        else {
            this.happiness = 100;
        }
        this.moss += 10;
        // can put line here to change text in the HTML saying that the pet was cleaned
        return this;
    }

    polish() {
        this.moss = 0;
    }
}
