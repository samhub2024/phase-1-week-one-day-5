const prompt = require("prompt-sync")({ sigint: true });

function speedChecker() {
    const speedLimit = 70;
    const demeritPointPerKm = 5;
    const maxDemeritPoints = 12;

    const speed = parseInt(prompt("Enter the speed of the car: "));

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // calculating demerit points for a driver exceeding the speed speedLimit
        let demeritPoints = Math.floor((speed - speedLimit) / demeritPointPerKm);
        const remainder = (speed - speedLimit) % demeritPointPerKm;
        if (remainder > 0) {
            demeritPoints++;
        }

        // if the demerit points of the driver exceed 12, the license is suspended
        if (demeritPoints >= maxDemeritPoints) {
            console.log("License suspended");
        } else {
            // if the license is not suspended, print the demerit points
            console.log(`Demerit points: ${demeritPoints}`);
        }
    }
}

speedChecker();

