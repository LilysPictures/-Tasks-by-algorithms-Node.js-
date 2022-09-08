/*
-- ПРИНЦИП РАБОТЫ --
1. Получаем массив и заводим указатели на начало и конец (l и h).
2. Определяем значения элемента в середине. Полученное значение сравниваем с ключом (k) (элементом, который нам нужно найти).
3. Если ключ меньше значения середины, то поиск осуществляется в первой половине элементов, иначе — во второй.
4. Поиск сводится к тому, что вновь определяется значение серединного элемента в выбранной половине и сравнивается с ключом.
5. Процесс продолжается до тех пор, пока не будет найден элемент со значением ключа или не станет пустым интервал для поиска.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Решить задачу нужно было таким образом, что бы все операции выполнялись за O(logn). Для реализации подходит бинарный поиск.
Двоичный (бинарный) поиск - классический алгоритм поиска элемента в отсортированном массиве, использующий дробление массива на половины.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Элемент в отсортированном массиве можно найти за время O(log n) с помощью двоичного поиска. Таким образом, временная сложность равна O(log n).

 -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность - O(1), дополнительное пространство не требуется.
*/

function search(arr, k, l, h) {
    if (l > h) return -1;
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] == k) return mid;
    if (arr[l] <= arr[mid]) {
      if (k >= arr[l] && k <= arr[mid]) return search(arr, k, l, mid-1);
      return search(arr, k, mid + 1, h);
    }
    if (k >= arr[mid] && k <= arr[h]) return search(arr, k, mid+1, h);
    return search(arr, k, l, mid-1);
}

function brokenSearch(arr, k) {
    let l = 0;
    let h = arr.length -1;
  return search(arr, k, l, h)
}

function test() {
    const arr = [19, 21, 100, 101, 1, 4, 5, 7, 12];
    if (brokenSearch(arr, 5) !== 6)  {
        console.error("-1");
    }
}
