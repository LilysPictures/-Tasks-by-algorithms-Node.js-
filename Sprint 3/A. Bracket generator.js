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

var hashTable  = ['', '', 'abc', 'def', 'ghi','jkl','mno', 'pqrs', 'tuv', 'wxyz']


function printWordsUtil(number, curr, output, n){ 
    if (curr == n){
       process.stdout.write(output.join("") + " ")
        return ;
      }
    for (let i = 0; i < hashTable[number[curr]].length; i++)
    {
        output.push(hashTable[number[curr]][i]);
        printWordsUtil(number, curr + 1, output, n);
     
        output.pop();
         
        if(number[curr] == 0 || number[curr] == 1)
            return
    }

}

function printWords(number, n){
    printWordsUtil(number, 0, [], n);
}

function solve() {
    let number  = readArray();
     let n = number.length;
      printWords(number, n)
}

function readArray() {
    var number = _inputLines[_curLine].trim("").split("");
    _curLine++;
    return number;
}
