let input = ``;

let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let getPriority = (c) => {
    let index = lowerCaseLetters.indexOf(c);
    if (index === -1) {
        index = upperCaseLetters.indexOf(c) + lowerCaseLetters.length;
    }
    return index + 1;
}


function solve() {
    let split = input.split('\n');
    let sumOfPriorities = 0;

    for (let i = 0; i < split.length; i += 3) {
        let firstLine = split[i];
        let secondLine = split[i + 1];
        let thirdLine = split[i + 2];

        let flagged = [];

        for (let char of firstLine) {
            if (secondLine.includes(char) && thirdLine.includes(char) && flagged.length === 0) {
                sumOfPriorities += getPriority(char);
                flagged.push(char);
            }
        }
    }
    console.log(sumOfPriorities);
}

solve();