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

 function countSort(arr)    {
   
    var max = 2;
    var min = 0;
    
    var range = max - min + 1;
    
    var count = Array.from({length: range}, (_, i) => 0);

    var output = Array.from({length: arr.length}, (_, i) => 0);

    for (i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
        
    }
 
    for (i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
         
    }
 
    for (i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
        
    }
 
    for (i = 0; i < arr.length; i++) {
        arr[i] = output[i];
       
    }
   return output
   
}


function solve() {
    const n = readInt();
    if (n === 0){}
    else {
    let arr = readArray();
    process.stdout.write(`${countSort(arr).join(' ')}`);
    }
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
  var arrR =  _inputLines[_curLine]
       if(arrR === undefined){}else{
    var arr = _inputLines[_curLine].trim(" ").split(" ").map((num) => Number(num));
    _curLine++;
    return arr;}
}