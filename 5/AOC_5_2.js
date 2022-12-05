let input = ``;

function solve() {

    let stacks = [];
    stacks.push([]); // 1
    stacks.push([]); // 2
    stacks.push([]); // 3
    stacks.push([]); // 4
    stacks.push([]); // 5
    stacks.push([]); // 6
    stacks.push([]); // 7
    stacks.push([]); // 8
    stacks.push([]); // 9

    let lines = input.split('\n');
    for (let line of lines) {
        if (!line.includes("move")) {
            let spaces = 0;
            let doCheck = false;
            for (let c of line) {
                if (doCheck) {
                    let index = (spaces - 1) / 4;
                    console.log("Adding " + c + " to stack " + index);
                    stacks[index].push(c);
                    doCheck = false;
                }

                spaces++;
                if (c === '[') {
                    console.log("Found [ at " + spaces);
                    doCheck = true;
                    continue;
                }
            }
        } else {
            let amountOfCrates = line.split(' from ')[0].split(' ')[1];
            let startingStack = line.split(' from ')[1].split(' to ')[0];
            let endingStack = line.split(' to ')[1];

            if (amountOfCrates > 1) {
                console.log("moving with "+ amountOfCrates);
                let buffer = [];
                for (let i = 0; i < amountOfCrates; i++) {
                    buffer.push(stacks[startingStack - 1].shift());
                }
                for (let i = buffer.length - 1; i >= 0; i--) {
                    stacks[endingStack - 1].unshift(buffer[i]);
                }
            } else {
                for (let i = 0; i < amountOfCrates; i++) {
                    let crateToMove = stacks[startingStack - 1][0];
                    stacks[startingStack - 1].splice(0, 1);
                    stacks[endingStack - 1].unshift(crateToMove);
                }
            }

        }
    }
    // console.log(stacks);
    let string = "";
    for (let stack in stacks) {
        string += stacks[stack][0];
    }
    console.log(string);
}

solve();