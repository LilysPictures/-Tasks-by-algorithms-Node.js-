/*
-- ПРИНЦИП РАБОТЫ --
1) На вход поступает массив. 
2) Выбираем из массива опорный элемент
3) Сравниваем все остальные элементы с опорным и переставляем их в массиве так, чтобы разбить массив на отрезки «меньшие опорного» и «равные и большие». 
4) В момент сортировки, когда сравниваем элементы добавляем компаратор, в который передаем элементы и pivot.
4) Выполняем рекурсивно ту же последовательность операций с полученными "отрезками".

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
В задаче сказано, что наша сортировка не может потреблять больше, чем O(n) дополнительной памяти для промежуточных данных. 
Поэтому данная задача была выполнена сортировкой "in-place" с выбором опорного элемента pivot = arr[right]. 
Вся сортировка проводилась в исходном массиве, без создания доп. массивов. 

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Когда я начала описывать решенную задачу, я поняла, что решила её по худшему случаю. Когда pivot-ом является наибольший (или наименьший) элементом. 
T(n) = T(n-1) + О(n)
T(n-1) - рекурсивные вызовы, а О(n) - процесса разделения.
Общая временная сложность для данного решения О(n2). 

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
т.к мы не создаем никаких дополнительных массивов для хранения информации, для массива размера n требуется O(n) дополнительного рабочего пространства. 

*/


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

// Здесь я разворачиваю массив. Что бы имена шли последним элементом
function moveName(array) {
  let arr = new Array();
    for (let i = 0; i < array.length; i++) {
      let arrStr = array[i].split(" ");
        let tempName = arrStr[0]
        arrStr[0] = arrStr[2] 
        arrStr[2] = tempName 
        let tempPoints = arrStr[0]
        arrStr[0] = Number(arrStr[1])  
        arrStr[1] =Number(tempPoints)
        arr.push(arrStr)
}
return arr
}

// Это компоратор, который я положу в функцию partition(arr, left, right) 
function comporator(person, pivot){
    if (person[0] != pivot[0]){
        return person[0] > pivot[0]
    }
    else if (person[1] != pivot[1]){
        return person[1] < pivot[1]
    }
    else {
        return person[2] < pivot[2]
    }
}

// Эта функция будет переставлять элементы внутри исходного массива. И это позволит мне не создавать лишние массивы. 
// (Просто изначально, я пыталась решить задачу способом, где сортировка выдавала мне 2-а новых массива (left & right). Но по условиям так нельзя, т.к. это занимает доп.память.) 
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Функция сортировки
function partition(arr, left, right) {
     let pivot = arr[right];
     let i = (left - 1);
    for (let j = left; j <= right - 1; j++) {
        let person = arr[j];
    if(comporator(person, pivot) === true){
             i++;
             swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right);
    return (i + 1);
}

// рекурсивные вызовы
function quickSort(arr, left, right) {
    if (left < right) { 
        let pi = partition(arr, left, right); 
        quickSort(arr, left, pi - 1);
        quickSort(arr, pi + 1, right);
    }
}

// Решила вывести результат консоль.логом, что бы не создавать новый массив. 
function printArray(arr, n) {
    for (let i = 0; i < n; i++)
        console.log(arr[i][2]); 
}


function solve() {
  const n = readInt();
  const array = arrLines(n)
  const arr = moveName(array)
  let left = 0
  let right = n-1;
  const sorted = quickSort(arr, left, right)
  const pi = partition(arr, left, right)
  const result = printArray(arr, n)
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readLine() {
  const line = _inputLines[_curLine];
  _curLine++;
  return line;
}

function arrLines(n) {
  var arr = [];
  for (let i = 0; i !== n; i++) {
    arr.push(readLine());
  }
  return arr;
}