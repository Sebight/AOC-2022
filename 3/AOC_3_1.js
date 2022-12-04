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

    for (let rucksack in split)
    {
        let length = split[rucksack].length;
        let half = Math.floor(length / 2);
        let firstCompartment = split[rucksack].substring(0, half);
        let secondCompartment = split[rucksack].substring(half, length);

        let flagged = [];

        for (let char of firstCompartment)
        {
            if (secondCompartment.includes(char) && !flagged.includes(char))
            {
                sumOfPriorities += getPriority(char);
                flagged.push(char);
            }
        }
    }

    console.log(sumOfPriorities);
}

solve();