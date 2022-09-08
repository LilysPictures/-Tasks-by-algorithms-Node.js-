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


function bubbleSort(arr){
  var i, j;
 
  var isSwapped = false;
  let res = [];
   let k = [];
  for(i =0; i < arr.length; i++){
    isSwapped = false;
   
    for(j = 0; j < arr.length; j++){
        if(arr[j] > arr[j + 1]){
          var temp = arr[j]
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          isSwapped = true;
        }
    }  
    if(!isSwapped){

      if(arr.join(" ") === k){
        break;
      }
     
        
    }  

    k = arr.join(" ")
      console.log(k)
  }  
  
}

function solve() {
    const n = readInt();
    const arr = readArray()
    let r = bubbleSort(arr)
    
    // console.log(r)
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map((num) => Number(num));
    _curLine++;
    return arr;
}