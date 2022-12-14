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

function maxPoints(k, arr) {

    const mergeArr = [...arr.filter(Boolean).reduce((acc, e) =>  acc.set(e, (acc.get(e) || 0) + 1), new Map()).values()];
   
    const PLAYERS = 2; 
    var number = 0; 
    
     for (var i = 0; i < mergeArr.length; ++i){
        if ( mergeArr[i] <= PLAYERS*k){
         number++
                 } 
      
}
 return number

}


function solve() {  
    const k = readInt();
    const arr1 = readArray(); 
    const arr2 = readArray(); 
    const arr3 = readArray(); 
    const arr4 = readArray(); 
    const arr = arr1.concat(arr2, arr3, arr4); 
  
process.stdout.write(`${maxPoints(k, arr)}`);
}

function readInt() {
    const k = Number(_inputLines[_curLine]);
    _curLine++;
    return k;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split("").map(Number);
    _curLine++;
    return arr;
}
