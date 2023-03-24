// subclass for rock pet
import Pet from "./pet.js";

export default class Rock extends Pet {
    moss = 0;

    constructor(name, petType) {
        super(name, petType);
    }

    petUpdate() {
        this.moss += 1;
        console.log("petupdate");
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
    }

    polish() {
        this.moss = 0;
    }
}
