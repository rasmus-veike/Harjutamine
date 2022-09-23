let tries = 1
let maxTries = 3
const random = Math.floor(Math.random() * 10) + 1;
console.log(random)
while (tries <= maxTries) {


    let number = parseInt(prompt());
    if (number == random) {
        console.log("Yay! Arvasid õige numbri ära!");
        break
    }
    else {
        if (number - random == 1 || number - random == -1) {
            console.log("Ai, sa pakkusid väga lähedale.")

        }

        tries += 1;
        

        console.log("Sul on võmalik veel " + (maxTries - tries) + " korda proovida");

    }
}
