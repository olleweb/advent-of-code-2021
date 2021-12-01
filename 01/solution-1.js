import { readFileSync } from "fs";
function getNumberOfIncreasedMeasurements() {
    const inputText = readFileSync('input.txt', 'utf8');
    const numberOfIncreasedMeasurements = (str) => {
        return str.split('\n').reduce(
            (total, currentValue, currentIndex, arr) => (currentIndex > 0 && Number(currentValue) > Number(arr[currentIndex - 1]) ? Number(total) + 1 : total),
            0
        );
    }
    console.log("Number of increased measurements: " + numberOfIncreasedMeasurements(inputText));
}
getNumberOfIncreasedMeasurements();
