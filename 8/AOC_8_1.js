let input = ``;

function solve() {
    let lines = input.split("\n");
    let visibleFromStart = 0;
    visibleFromStart += lines[0].length;
    visibleFromStart += lines[lines.length - 1].length;
    visibleFromStart += lines.length * 2;
    visibleFromStart -= 4;

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

            let loopFinished = false;

            let visibleFromUp = false;
            let visibleFromDown = false;
            let visibleFromLeft = false;
            let visibleFromRight = false;


            console.log("CHECKING: ", current);

            last = current;
            loopFinished = false;
            for (let k = j - 1; k >= 0; k--) {
                let next = lines[i][k];
                history.left.push(next);
            }

            last = current;
            loopFinished = false;
            for (let k = j + 1; k < lines[i].length; k++) {
                let next = lines[i][k];
                history.right.push(next);
            }

            last = current;
            loopFinished = false;
            for (let k = i - 1; k >= 0; k--) {
                let next = lines[k][j];
                history.up.push(next);
            }

            last = current;
            loopFinished = false;
            for (let k = i + 1; k < lines.length; k++) {
                let next = lines[k][j];
                history.down.push(next);
            }

            for (let k = 0; k < history.left.length; k++) {
                if (current > history.left[k]) {
                    visibleFromLeft = true;
                } else {
                    visibleFromLeft = false;
                    break;
                }
            }

            for (let k = 0; k < history.right.length; k++) {
                if (current > history.right[k]) {
                    visibleFromRight = true;
                } else {
                    visibleFromRight = false;
                    break;
                }
            }

            for (let k = 0; k < history.up.length; k++) {
                if (current > history.up[k]) {
                    visibleFromUp = true;
                } else {
                    visibleFromUp = false;
                    break;
                }
            }

            for (let k = 0; k < history.down.length; k++) {
                if (current > history.down[k]) {
                    visibleFromDown = true;
                } else {
                    visibleFromDown = false;
                    break;
                }
            }

            if (visibleFromUp || visibleFromDown || visibleFromLeft || visibleFromRight) {
                visibleFromStart++;
            }
        }
    }

    console.log(visibleFromStart);
}

solve();