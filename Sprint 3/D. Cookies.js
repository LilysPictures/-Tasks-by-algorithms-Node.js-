const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

  function maxPerimeter(arr, n){
        arr.sort(function(a, b){return a - b});
        arr.reverse();
        let maxi = 0;
 
        for (let i = 0; i < n-2; i++){
             if (arr[i] < arr[i+1] + arr[i+2]){
                maxi = Math.max(maxi, arr[i] + arr[i+1] + arr[i+2]);
                break;
            }
        }
        if (maxi > 0)
        return maxi;
    }

function solve() {
    const n = readInt();
    const arr = readArray()

    process.stdout.write(`${maxPerimeter(arr, n)}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}