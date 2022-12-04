let input = ``;

function solve()
{
    let totals = [];
    let index = 0;
    
    let blocks = input.split("\n");

    for (let block of blocks)
    {
        if (block.length == 0)
        {
            index++;
            continue;
        }
        totals[index] = (totals[index] || 0) + parseInt(block);
    }
    let maxIndex = totals.indexOf(Math.max(...totals));
    console.log(totals[maxIndex]);
}

solve();