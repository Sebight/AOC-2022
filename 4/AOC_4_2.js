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

        let firstPairNums = [];
        let secondPairNums = [];

        let found = false;

        for (let i = firstPair.first; i <= firstPair.second; i++)
        {
            firstPairNums.push(i);
        }

        for (let i = secondPair.first; i <= secondPair.second; i++)
        {
            if (firstPairNums.includes(i)){
                found = true;
                total++;
                break;
            }
            secondPairNums.push(i);
        }

        if (found) continue;

        for (let n of firstPairNums)
        {
            if (secondPairNums.includes(n)){
                total++;
                break;
            }
        }
        
    }
    console.log(total);
}

solve();