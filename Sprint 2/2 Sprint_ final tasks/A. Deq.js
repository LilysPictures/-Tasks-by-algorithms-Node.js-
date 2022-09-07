
/*
-- ПРИНЦИП РАБОТЫ --
На вход получаем числа n, m и массив comands с максимальным размером m, в котором содержатся поступившие команды ['push_front -855', 'push_front 0' ...]
Из данного массива, с помощью цикла forEach(el), мы получаем команды и числа для команд push_front, push_back. 

Мы создали class Deque, который содержит внутри конструктор
constructor() {
      this.arr = {};
      this.front = -1;
      this.rear = 0;
      this.size = m;
    }
и функции для выполнения поступивших команд.
Функция isFull() - проверяет переполненность дека,
isEmpty() - проверка дека на пустоту,
push_front(value) - принимает value, которое мы достали из команды push_front, и добавляет элементы в this.arr = {}, двигаясь по часовой стрелке ,
push_back(value) - принимает value, и добавляет элементы против часовой стрелки.
pop_front() - удаляет элементы, двигаясь против часовой стрелке,
pop_back() - удаляет элементы, двигаясь по часовой стрелке.
  
Создаем новый массив result, в который будем пушить полученные результаты. 
Так же в массив будут добавляться сообщения "error" по введенным ограничениям. Например если при выполнении команд Дек пуст или переполнен.


-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Решить задачу нужно было таким образом, что бы все операции выполнялись за O(1). 
Поэтому для решения задачи подошла схема кольцевого буфера, это когда после добавлениия последнего элемента сразу же снова идет первый.
Эта структура позволила обойтись без фактического перемещения данных при добавлении нового элемента в начало массива, 
иначе бы нам пришлось бы сдвинуть весь массив данных и сложность алгоритма увеличилась бы.

Т.о мы имеем циклический Дек константной длины. Он способен вместить не более m элементов. 
Переполнение дека и изъятие из пустого дека - заблокированы. И в нашем случае, все операции, добавление и удаление выполняются за O(1).


-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
В задаче мы добавляем и удаляем элементы только в начало и конец дека.
Т.о все наши команды (push_front(x), push_back(x), pop_front() и pop_back()) выполняются за O(1). 

При добавление 1-ого элемента в начало очереди и извлечение из конца очереди сложность алгоритма будет O(1). При добавлении n-элементов, общая временная сложность станет O(n).

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Дек расходует O(n) памяти, для хранения самих элементов.
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

class Deque {
  constructor(m) {
    this.arr = {};
    this.front = -1;
    this.rear = 0;
    this.size = m;
    this.max = 0;
  }

  pushFront(value) {
    if (this.max >= this.size) {
      return "error";
    }
    if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front == 0) {
      this.front = this.size - 1;
    } else {
      this.front = this.front - 1;
    }
    this.max++;
    this.arr[this.front] = value;
  }

  pushBack(value) {
    if (this.max >= this.size) {
      return "error";
    }
    if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.size;
    }
    this.max++;
    this.arr[this.rear] = value;
  }

  popFront() {
    let resultPopFront = 0;
    if (this.max <= 0) {
      return "error";
    }
    if (this.front == this.rear) {
      resultPopFront = this.arr[this.front];
      this.front = -1;
      this.rear = -1;
    } else {
      if (this.front == this.size - 1) {
        resultPopFront = this.arr[this.front];
        this.front = 0;
        delete this.arr[this.size - 1];
      } else {
        resultPopFront = this.arr[this.front];
        this.front = this.front + 1;
      }
    }
    this.max--;
    return resultPopFront;
  }

  popBack() {
    let resultPopBack = 0;
    if (this.max <= 0) {
      return "error";
    }
    if (this.front == this.rear) {
      resultPopBack = this.arr[this.rear];
      this.front = -1;
      this.rear = -1;
    } else if (this.rear == 0) {
      resultPopBack = this.arr[this.rear];
      this.rear = this.size - 1;
    } else {
      resultPopBack = this.arr[this.rear];
      this.rear = this.rear - 1;
    }
    this.max--;
    return resultPopBack;
  }
}

function solve() {
  const n = readInt();
  const m = readInt();
  const comands = arrLines(n);

  let deque = new Deque(m);

  let result = [];
  comands.forEach((el) => {
    if (el !== undefined) {
      if (el.includes("push_front")) {
        var value = el.split(" ")[1];
        if (deque.pushFront(value) === "error") {
          result.push(deque.pushFront(value));
        }
      } else if (el === "pop_front") {
        result.push(deque.popFront());
      } else if (el.includes("push_back")) {
        var value = el.split(" ")[1];
        if (deque.pushBack(value) === "error") {
          result.push(deque.pushBack(value));
        }
      } else if (el === "pop_back") {
        result.push(deque.popBack());
      }
    }
  });
  process.stdout.write(`${result.join("\r\n")}`);
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
  return n;
}

function readInt() {
  const m = Number(_inputLines[_curLine]);
  _curLine++;
  return m;
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
