const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function SubSequence(arr1, arr2, m, n)
{
 let j = 0;
        for (let i = 0; i < n && j < m; i++)
            if (arr1[j] == arr2[i])
                j++;
        return (j == m);
}
 


function solve() {
    let arr1  = readArray();
    let arr2  = readArray();
 let m = arr1.length;
 let n = arr2.length;
 
 let res = SubSequence(arr1, arr2, m, n);
 
if (res)
console.log ("True");
  
else
console.log("False");
 


}

function readArray() {
    var number = _inputLines[_curLine].trim("").split("");
    _curLine++;
    return number;
}

