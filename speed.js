function calculateSpeedPoints(speed) {
    if (speed < 70) {
        return 'Ok';
    } else {
        let points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            return 'License suspended';
        } else {
            return `Points: ${points}`;
        }
    }
}

const userSpeed = process.argv[2];
const parsedSpeed = Number(userSpeed);

if (!userSpeed || userSpeed.trim() === '' || parsedSpeed < 0 || !Number.isFinite(parsedSpeed)) {
    console.log("Invalid speed entered. Please enter a valid positive number.");
} else {
    const result = calculateSpeedPoints(parsedSpeed);
    console.log(result);
}