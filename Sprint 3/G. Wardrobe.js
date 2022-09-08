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

 function myCompare(X, Y){
    let XY = X + Y;
    let YX = Y + X;
    return YX - XY
}

function printLargest(arr){
    arr.sort(myCompare);
    for(let i = 0; i < arr.length; i++){
    }
    return arr.join("")
}

function solve() {
    const n = readInt();
    const arr = readArray()
    let r = printLargest(arr)
    process.stdout.write(`${r}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    _curLine++;
    return arr;
}