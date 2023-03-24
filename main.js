// import pet subclasses
import Rock from "./modules/rock.js";
import Cat from "./modules/cat.js";
import Dragon from "./modules/dragon.js";

const homeScreen = document.getElementById("home");
const petScreen = document.getElementById("pet");

const homeButton = document.getElementById("home-button");

const petSelectRock = document.getElementById("home-button-rock");
const petSelectCat = document.getElementById("home-button-cat");
const petSelectDragon = document.getElementById("home-button-dragon");
const petNameInput = document.getElementById("pet-name");
const petNameSubmit = document.getElementById("pet-name-submit");

const petActions = document.getElementById("pet-actions");

let petSelection = "";

homeScreen.hidden = false;
petScreen.hidden = true;

const tickLength = 10000;
let ticker;

const getFunctions = (obj) => {
    let properties = new Set();
    let currentObj = obj;
    do {
        Object.getOwnPropertyNames(currentObj).map(item => properties.add(item));
    } while ((currentObj = Object.getPrototypeOf(currentObj)));
    return [...properties.keys()].filter(item => typeof obj[item] === 'function');
}

// game state object
const gameState = {
    petFunctions: [],
    
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

        homeScreen.hidden = true;
        petScreen.hidden = false;

        this.petFunctions = getFunctions(this.pet);
        this.petFunctions.forEach((func) => {
            const newButton = document.createElement("button");
            newButton.type = "button";
            newButton.textContent = `${func}`;
            newButton.classList.add("action-button");
            newButton.id = `${func}-button`;

            newButton.addEventListener("click", (event) => {
                // code for calling the correct function here
                console.log(`${func} test`);
            });

            petActions.appendChild(newButton);

            console.log(func);
        });

        ticker = setInterval(() => this.tick(), tickLength);
    },

    tick () {
        console.log("tick");
        this.pet.update();
    }
}

// main game functions
petSelectRock.addEventListener("click", () => {
    petSelection = "Rock";

    petSelectRock.style.filter = "none";
    petSelectCat.style.filter = "blur(5px)";
    petSelectDragon.style.filter = "blur(5px)";
});

petSelectCat.addEventListener("click", () => {
    petSelection = "Cat";

    petSelectRock.style.filter = "blur(5px)";
    petSelectCat.style.filter = "none";
    petSelectDragon.style.filter = "blur(5px)";
});

petSelectDragon.addEventListener("click", () => {
    petSelection = "Dragon";

    petSelectRock.style.filter = "blur(5px)";
    petSelectCat.style.filter = "blur(5px)";
    petSelectDragon.style.filter = "none";
});

petNameSubmit.addEventListener("click", () => {
    if (petSelection != "" && petNameInput.value != "") {
        gameState.initialise(petSelection, petNameInput.value);
    } else if (petSelection === "" && petNameInput.value === "") {
        alert("Please select a pet type and choose a name");
    } else if (petSelection === "") {
        alert("Please select a pet type");
    } else if (petNameInput.value === "") {
        alert("Please choose a name");
    }
});

homeButton.addEventListener("click", () => {
    homeScreen.hidden = false;
    petScreen.hidden = true;
    delete gameState.pet;
    clearInterval(ticker);
})