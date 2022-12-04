let input = ``;

class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}

function solve() {
    let pairs = input.split('\n');
    let total = 0;
    for (let pair of pairs)
    {
        let firstPair = new Pair(parseInt(pair.split(',')[0].split('-')[0]), parseInt(pair.split(',')[0].split('-')[1]));
        let secondPair = new Pair(parseInt(pair.split(',')[1].split('-')[0]), parseInt(pair.split(',')[1].split('-')[1]));
        if ((firstPair.first >= secondPair.first && firstPair.second <= secondPair.second)
        ||
        (secondPair.first >= firstPair.first && secondPair.second <= firstPair.second))
        {
            total++;
        }
    }
    console.log(total);
}

solve();