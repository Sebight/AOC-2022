let input = ``;

function solve() {
    let lines = input.split("\n");
    let visibleFromStart = 0;
    visibleFromStart += lines[0].length;
    visibleFromStart += lines[lines.length - 1].length;
    visibleFromStart += lines.length * 2;
    visibleFromStart -= 4;

    let scenicScores = [];

    for (let i = 1; i < lines.length - 1; i++) {
        for (let j = 1; j < lines[i].length - 1; j++) {
            let current = lines[i][j];
            let last = 0;

            let history = {
                left: [],
                right: [],
                up: [],
                down: []
            };



            console.log("CHECKING: ", current);

            for (let k = j - 1; k >= 0; k--) {
                let next = lines[i][k];
                history.left.push(next);
            }

            for (let k = j + 1; k < lines[i].length; k++) {
                let next = lines[i][k];
                history.right.push(next);
            }

            for (let k = i - 1; k >= 0; k--) {
                let next = lines[k][j];
                history.up.push(next);
            }

            for (let k = i + 1; k < lines.length; k++) {
                let next = lines[k][j];
                history.down.push(next);
            }

            //Checking

            let viewingDistance = {
                left: 0,
                right: 0,
                up: 0,
                down: 0
            }

            for (let k = 0; k < history.left.length; k++) {
                if (current > history.left[k]) {
                    viewingDistance.left++;
                } else {
                    viewingDistance.left++;
                    break;
                }
            }

            for (let k = 0; k < history.right.length; k++) {
                if (current > history.right[k]) {
                    viewingDistance.right++;
                } else {
                    viewingDistance.right++;
                    break;
                }
            }

            for (let k = 0; k < history.up.length; k++) {
                if (current > history.up[k]) {
                    viewingDistance.up++;
                } else {
                    viewingDistance.up++;
                    break;
                }
            }

            for (let k = 0; k < history.down.length; k++) {
                if (current > history.down[k]) {
                    viewingDistance.down++;
                } else {
                    viewingDistance.down++;
                    break;
                }
            }

            scenicScores.push(viewingDistance.left * viewingDistance.right * viewingDistance.up * viewingDistance.down);
            console.log(viewingDistance.left * viewingDistance.right * viewingDistance.up * viewingDistance.down)
        }
    }

    // console log the max value in scenicScores
    console.log(Math.max(...scenicScores));
}

solve();