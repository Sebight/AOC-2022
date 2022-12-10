let input = ``;

let x = 1;
let isThreadOccupied = false;
let finishedTasks = 0;

class ScheduledTask {
    constructor(action, time) {
        this.action = action;
        this.time = time;
    }
}

function tick(command) {
    if (command === "noop") {
        finishedTasks++;
    } else if (command.includes("addx")) {
        let amount = parseInt(command.split(" ")[1]);
        let task = new ScheduledTask(() => x += amount, 2);
        isThreadOccupied = true;
        scheduled.push(task);
    }

    for (let task of scheduled) {
        task.time--;
        if (task.time === 0) {
            task.action();
            isThreadOccupied = false;
            scheduled.splice(scheduled.indexOf(task), 1);
            finishedTasks++;
        }
    }
}

let scheduled = [];

function solve() {
    let splitLines = input.split(`\n`);
    let lineIndex = 0;
    let cycles = 0;
    let sum = 0;

    while (cycles != 220) {
        cycles++;

        if (cycles == 20 || cycles == 60 || cycles == 100 || cycles == 140 || cycles == 180 || cycles == 220) {
            let total = x * cycles;
            sum += total;
        }

        if (isThreadOccupied) {
            tick("");
        } else {
            let lineToSend = splitLines[lineIndex];
            if (lineToSend === undefined) lineToSend = "";
            tick(isThreadOccupied ? "" : lineToSend);
            lineIndex++;
        }
    }
    console.log(sum);
}

solve();