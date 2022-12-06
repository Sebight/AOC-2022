let input = "";

function checkBufferUnique(buffer) {
    let unique = true;
    for (let i = 0; i < buffer.length; i++) {
        for (let j = i + 1; j < buffer.length; j++) {
            if (buffer[i] === buffer[j]) {
                unique = false;
                break;
            }
        }
    }
    return unique;
}

function solve()
{
    let buffer = [];
    let added = 0;

    for (let i = 0; i < 4; i++)
    {
        buffer.push(input[i]);
        added++;
    }
    if (checkBufferUnique(buffer))
    {
        console.log(added);
        return added;
    }

    for (let i = 4; i < input.length; i++)
    {
        buffer.shift();
        buffer.push(input[i]);
        added++;
        if (checkBufferUnique(buffer))
        {
            console.log(added);
            return added;
        }
    }
}

solve();