// Enemy - A: Rock, B: Paper, C: Scissors
// Me - X: Rock, Y: Paper, Z: Scissors

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

let evaluateWinnerWithScore = (a, b) => {
    if (a === remap[b])
    {
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