// subclass for rock pet
import Pet from "./pet.js";

export default class Rock extends Pet {
    moss = 0;

    constructor(name, petType) {
        super(name, petType);
    }

    #petUpdate() {
        this.moss += 1;
        console.log("petupdate");
    }

    // no generic functions in the pet subclasses please! this overrides the play function in pet.js which we don't want to do
    play() {
        if (this.happiness < 80) {
            this.happiness += 20;
        }
        else {
            this.happiness = 100;
        }
        this.moss += 10;
        // can put line here to change text in the HTML saying that the pet was cleaned
        console.log("playtest");
    }

    polish() {
        this.moss = 0;
    }
}
