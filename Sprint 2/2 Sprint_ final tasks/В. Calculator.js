/*
-- ПРИНЦИП РАБОТЫ --
На вход получаем массив arr (например [2 1 + 3 *]). Мы его будем парсить.
Создаем новый массив result, в который будем пушить наши результаты. 
Используя цикл for, делаем проверку каждого элемента arr на !isNaN(arr[i]) и смотрим, является ли элемент числовым значением или нет. 
Если элемент--число, заносим его в массив result.
Если элемент--знак (*,+,/), то для каждого знака выполняем логику. 
Если это "+", берем 2-а последних элемента (а и b) из массива result (с помощью result.pop()) и пушим в массив сумму этих значений.
Если встретился "-", то пушим в массив b-a, 
если "*" - пушим b*a, 
если "/" то b/a, но при делении пушим математическое целочисленное значение (Math.floor)
И так до тех пор, пока не переберем все элементы в массиве arr.


-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Для решения задачи нужно использовать обратную польскую нотацию. 
Из описания нотации следует, что операции выполняются в последовательности справа-налево с последними  числами поступившими в массив.
Поэтому будем использовать Стек. Стек -- это порядок LIFO (последним вошёл — первым вышел).
Т.о. для выполнения операций,  в первую очередь, нам потребуются элементы, которые были занесены в массив позже всех.


-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Мы используем команды для добавления элемента в стек или удаление элемента с вершины стека.
Добавление и извлечение 1-ого элемента - стоит O(1). 
Это значит, что добавление и извлечение n элементов в сумме будет стоить O(n).


-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Для хранения элементов в стеке требуется O(n) памяти.
*/

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

function calcPolish(arr) {
  arr = arr.map((token) => {
    if(token === '0'){
        return 0
      }
    return Number(token) ? Number(token) : token;
  });

  let Operation = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.floor(a / b),
  };

  let result = [];

  arr.forEach((el) => {
    result.push(Operation[el] ? Operation[el](...result.splice(-2)) : el);
  });

  if (result.length > 1) {
    return Math.max.apply(Math, result);
  } else {
    return result[0];
  }
}

function solve() {
  const arr = readArray();
  process.stdout.write(`${calcPolish(arr)}`);
}

function readArray() {
  var arr = _inputLines[_curLine].trim(" ").split(" ");
  _curLine++;
  return arr;
}
