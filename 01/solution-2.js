import { readFileSync } from "fs";
function getNumberOfIncreasedMeasurementWindows() {
    const inputText = readFileSync('input.txt', 'utf8');
    const numberOfIncreasedMeasurementWindows = (str) => {
        return str.split('\n').reduce(
            (windowArray, currentValue, currentIndex, arr) => {
                (currentIndex > 1 ? windowArray.push(Number(currentValue) + Number(arr[currentIndex - 1]) + Number(arr[currentIndex - 2])) : null);
                return windowArray;
            },
            []
        ).reduce(
            (total, currentValue, currentIndex, arr) => (currentIndex > 0 && Number(currentValue) > Number(arr[currentIndex - 1]) ? Number(total) + 1 : total),
            0
        );
    }
    console.log("Number of increased measurement windows: " + numberOfIncreasedMeasurementWindows(inputText));
}
getNumberOfIncreasedMeasurementWindows();
