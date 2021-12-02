import { readFileSync } from "fs";
function getPosition() {
    const inputText = readFileSync('input.txt', 'utf8');
    const positionObject = (str) => {
        return str.split('\n').reduce(
            (positionObj, currentValue) => {
                (
                    currentValue.startsWith("forward") ?
                    positionObj.horizontalPos += Number(currentValue.substring(8)) :
                    (
                        currentValue.startsWith("down") ?
                        positionObj.depth += Number(currentValue.substring(5)) :
                        (
                            currentValue.startsWith("up") ?
                            positionObj.depth -= Number(currentValue.substring(3)) :
                            null
                        )
                    )
                );
                return positionObj;
            },
            {
                horizontalPos: 0,
                depth: 0,
            }
        );
    }
    const thePosition = positionObject(inputText);
    console.log("Horizontal position: " + thePosition.horizontalPos);
    console.log("Depth: " + thePosition.depth);
    console.log("Product: " + thePosition.horizontalPos * thePosition.depth);
}
getPosition();
