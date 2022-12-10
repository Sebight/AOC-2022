let input = ``;

let x = 1;
let isThreadOccupied = false;
let finishedTasks = 0;
let cycles = 0;

let image = [];
for (let i = 0; i < 6; i++) {
    image.push([]);
}        

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

function draw() {
    let column = cycles % 40;
    let row = Math.floor(cycles / 40);

    if (column >= (x-1) && column <= (x+1)) {
        image[row][column] = '#';
    } else {
        image[row][column] = '.';
    }
}

let scheduled = [];

function solve() {
    let splitLines = input.split(`\n`);
    let lineIndex = 0;
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
        draw();
    }
    // write image into one string
    let imageString = "";
    image.forEach(row => {
        imageString += row.join('') + "\n";
    });
    console.log(imageString);
}

solve();