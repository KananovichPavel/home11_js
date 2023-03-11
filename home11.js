/*Task 1: Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.*/
console.log(
    [1, 3, 4, 36, 0, 25, 16]
        .filter(element => !(element % 2))
        .reduceRight((summ, element) => summ + Math.sqrt(element), 0)
);


/*Task 2: Напишите функцию, которая заполняет новый массив предоставленным значением. Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']*/
const task2 = (arraySize, value) => {
    const result = [];
    for (let i = 0; i < arraySize; i++) {
        result.push(value);
    }
    return result;
};
console.log(task2(3, "a"));


/*Task 3: Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(). Ожидаемый результат: [1, 2, 3] => [3, 2, 1]*/
const task3 = array => {
    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
const dataTask3 = [1, 2, 3];
console.log(task3(dataTask3));


/*Task 4: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null. Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]*/
array = [0, 1, false, 2, undefined, '', 3, null];

function task4(arr) {
    return arr.filter(item => {
        if (!isNaN(item)) {
            return item
        };
    });
};
console.log(task4(array));


/*Task 5: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение. Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }*/
const task5 = array => {
    const object = {};
    for (let i = 0; i < array.length; i++) {
        object[array[i][0]] = array[i][1];
    }
    return object;
};
console.log(task5([['a', 1], ['b', 2]]));


/*Task 6: Напишите функцию, которая убирает повторяющиеся значения. Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]*/
const task6 = array => array.filter((item, index) => array.indexOf(item) === index);
const dataTask6 = [1, 2, 3, 1, 2];
console.log(task6(dataTask6));


/*Task 7: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны. Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true*/
var first = [1, 2, 3];
var second = [1, 2, 3];
var isEqual = first.length === second.length &&
    first.every((value, index) => value === second[index])

console.log(isEqual);


/*Task 8: Напишите функцию, которая преобразует глубокий массив в одномерный. Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]. не используйте array.flat()*/
var arrays = [1, 2, [3, 4, [5]]];
function task8(array) {
    var res = [];
    for (var i = 0; i < array.length; i++)
        if (!Array.isArray(array[i]))
            res.push(array[i]);
        else
            res = res.concat(task8(array[i]));
    return res;
}
console.log(task8(arrays));


/*Task 9: Напишите функцию, которая разделяет массив на части заданного размера. Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]*/
function task9(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

const arr = [1, 2, 3, 4, 5];
console.log(task9(arr, 2));


/*Task 10: Преобразовать первый символ строки в нижний регистр*/
var str = "Пример строки";
function task10(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(task10(str)); // пример строки

