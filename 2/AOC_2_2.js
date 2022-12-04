// Enemy - A: Rock, B: Paper, C: Scissors
// Me - X: Lose, Y: Draw, Z: Win

let guide = ``;

let scoresForItems = {
    'X': 1,
    'Y': 2,
    'Z': 3
};

let remap = {
    'X': 'A',
    'Y': 'B',
    'Z': 'C'
}

let evaluateMyDraw = (predictedResult, enemyDraw) => {
    console.log(predictedResult);
    console.log(enemyDraw);
    if (predictedResult === "X") {
        // Lose
        if (enemyDraw === "A") {
            return "Z";
        } else if (enemyDraw === "B") {
            return "X";
        }
        else if (enemyDraw === "C") {
            return "Y";
        }
    } else if (predictedResult === "Y") {
        // Draw
        for (let key of Object.keys(remap)) {
            if (remap[key] === enemyDraw) {
                return key;
            }
        }
    } else if (predictedResult === "Z") {
        // Win
        if (enemyDraw === "A") {
            return "Y";
        } else if (enemyDraw === "B") {
            return "Z";
        }
        else if (enemyDraw === "C") {
            return "X";
        }
    }
}

let evaluateWinnerWithScore = (a, b) => {
    b = evaluateMyDraw(b, a);
    console.log("I am supposed to play " + b);

    if (a === remap[b]) {
        return 3 + scoresForItems[b];
    }

    // Enemy has a rock and I have a paper
    if (a === 'A' && b === 'Y') {
        let score = 6 + scoresForItems[b];
        return score;
    }


    // Enemy has a rock and I have a scissors
    if (a === 'A' && b === 'Z') {
        let score = 0 + scoresForItems[b];
        return score;
    }

    // Enemy has a paper and I have a rock
    if (a === 'B' && b === 'X') {
        let score = 0 + scoresForItems[b];
        return score;
    }

    // Enemy has a paper and I have a scissors
    if (a === 'B' && b === 'Z') {
        let score = 6 + scoresForItems[b];
        return score;
    }


    // Enemy has a scissors and I have a rock
    if (a === 'C' && b === 'X') {
        let score = 6 + scoresForItems[b];
        return score;
    }

    // Enemy has a scissors and I have a paper
    if (a === 'C' && b === 'Y') {
        let score = 0 + scoresForItems[b];
        return score;
    }
}

function solve() {
    let steps = guide.split("\n");
    let totalScore = 0;
    for (let step of steps) {
        let split = step.split(' ');
        let enemyMove = split[0];
        let myMove = split[1];
        let output = evaluateWinnerWithScore(enemyMove, myMove);
        totalScore += output;
    }
    console.log(totalScore);
}


solve();