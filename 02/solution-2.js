import { readFileSync } from "fs";
function getPosition() {
    const inputText = readFileSync('input.txt', 'utf8');
    const positionObject = (str) => {
        return str.split('\n').reduce(
            (positionObj, currentValue) => {
                if (currentValue.startsWith("forward")) {
                    const x = Number(currentValue.substring(8));
                    positionObj.horizontalPos += x;
                    positionObj.depth += positionObj.aim * x;
                }
                else if (currentValue.startsWith("down")) {
                    positionObj.aim += Number(currentValue.substring(5));
                }
                else if (currentValue.startsWith("up")) {
                    positionObj.aim -= Number(currentValue.substring(3));
                }
                return positionObj;
            },
            {
                horizontalPos: 0,
                depth: 0,
                aim: 0,
            }
        );
    }
    const thePosition = positionObject(inputText);
    console.log("Horizontal position: " + thePosition.horizontalPos);
    console.log("Depth: " + thePosition.depth);
    console.log("Aim: " + thePosition.aim);
    console.log("Product: " + thePosition.horizontalPos * thePosition.depth);
}
getPosition();
