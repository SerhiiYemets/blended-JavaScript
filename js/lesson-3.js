// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// // const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num * num);
// console.log(squares); // [1, 4, 9, 16, 25]


// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const all = data.flatMap((dat) => dat.values);

// console.log(all);



// Завдання 3:

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const all = people.some((people) => people.age < 20);
// console.log(all);


// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.


// // const numbers = [2, 4, 6, 8, 10];
// const evenNums = numbers.every((number) => number % 2 === 0);
// console.log(evenNums);


// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const evenNums = numbers.find((number) => number % 2 !== 0);
// console.log(evenNums);



// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].


// const numbersArray = [4, 2, 5, 1, 3];
// const evenNums = numbersArray.toSorted((a, b) => a - b);
// console.log(evenNums);




// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].


// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const arrayString = stringArray.toSorted((a, b) => a.localeCompare(b))
// console.log(arrayString);




// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];



// Завдання 9:

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]



// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];


// Завдання 11:

 // Розроби клас Calculator, який дозволяє виконувати арифметичні
 //  операції над числом за допомогою методів класу, підтримуючи
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.

 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

 // - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

 // - метод multiply -Множить поточне значення на value. Повертає this.

 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

 // Приклад використання:


//  class Calculator {
//   number(value) {
//     this.value = value;
//     return this;
//   }

//   add(value) {
//     this.value += value;
//     return this;
//   }

//   subtract(value) {
//     this.value -= value;
//     return this;
//   }

//   multiply(value) {
//     this.value *= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       throw new Error("Division by zero is not allowed");
//     }
//     this.value /= value;
//     return this;
//   }

//   getResult() {
//     return this.value; // Возвращаем текущее значение
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10)   // Устанавливаем начальное значение 10
//   .add(5)       // Добавляем 5 (10 + 5 = 15)
//   .subtract(3)  // Вычитаем 3 (15 - 3 = 12)
//   .multiply(4)  // Умножаем на 4 (12 * 4 = 48)
//   .divide(2)    // Делим на 2 (48 / 2 = 24)
//   .getResult(); // Получаем результат: 24

// console.log(result); // 24

