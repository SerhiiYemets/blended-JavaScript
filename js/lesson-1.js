// Завдання 1:

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 
// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().



// const number = Number(prompt("Введите число:"));
// if (number === 10) {
//     alert("Верно!");
// } else {
//     alert("Неверно!");
// }




// Завдання 2:

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
// const min = Math.floor(Math.random() * (59 - 0) + 0);



// const min = Math.floor(Math.random() * 60);
// let quarter;
// if (min >= 0 && min < 15) {
//     quarter = "перша";
// }
// else if (min >= 15 && min < 30) {
//     quarter = "друга";
// }
// else if (min >= 30 && min < 45) {
//     quarter = "третя";
// }
// else if (min >= 45 && min < 60) {
//     quarter = "четверта";
// }
// alert (`${min} входить в ${quarter} чверть`);   



//Завдання 3:

// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.



// const userAnswer = prompt("Введіть число від 1 до 4:");
// let result;
// switch (userAnswer) {
//     case '1':
//         result = 'зима';
//         break;
//     case '2':
//         result = 'весна';
//         break;
//     case '3':
//         result = 'літо';
//         break;
//     case '4':
//         result = 'осінь';
//         break;
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }
// console.log(userAnswer);


//Завдання 4:

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples




// const totalMinutes = Number(prompt("кількість хвилин:"));
// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const modifiedHours = String(hours).padStart(2, 0);
//     const minutes = totalMinutes % 60;
//     const modifiedMinutes = String(minutes).padStart(2, 0);
//     return `${modifiedHours}:${modifiedMinutes}`;
// }

// console.log(formatTime(totalMinutes));



//Завдання 5:

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"



// const login = prompt("Введіть логін:");

// if (login === "Адмін") {
//     const password = prompt("Введіть пароль:");

//     if (password === "Я головний") {
//         alert("Добрий день!");
//     } else if (password === "" || password === null) {
//         alert("Скасовано");
//     } else {
//         alert("Невірний пароль!");
//     }

// } else if (login === "" || login === null) {
//     alert("Скасовано");
// } else {
//     alert("Я вас не знаю");
// }


//Завдання 6:

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.


// let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i += 1;
// }



//Завдання 7:

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.



// const max = 50;
// const min = 20;

// function getNumbers(min, max) {
//     let sumOdd = 0;
//     for (let i = max; i >= min; i -=1 ) {
//         console.log(i);
//         if (i % 2 === 0) {
//             sumOdd += i;
//         }
//     }
// }



//Завдання 8:

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.



// function min(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'Not a number!';
//     }
//     return a < b ? a : b;
// }
// console.log(min(5, 10)); // 5



//Завдання 9:

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

// function isAdult(age) {
//     if (typeof age !== 'number') {
//         return 'Not a number!';
//     }
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Вам є 18 років?');
//     }
// }


//Завдання 10:

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.



// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }



// Завдання 11:
// Напишіть цикл for, який виведе в консоль числа від 0 до 9 включно.
// Перед циклом виведіть в консоль повідомлення 'before',
// а після циклу - 'after'.
// console.log('before');

// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
// }

// console.log('after');



// Завдання 12:
// // Напишіть цикл for, який виведе в консоль всі букви рядка 'Alice' до першої літери 'l' включно.
// Використовуйте break для виходу з циклу.
// Після циклу виведіть в консоль повідомлення 'Цикл завершено'.
// Підказка: використовуйте змінну str для збереження рядка 'Alice'.    


// const str = 'Alice';

// for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === 'l') {
//         break
//     }
//     console.log(str[i]);
// }
// это цикл покажет первую букву в переменной




// const fruits = ["apple", "banana", "orange"];

// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contain banana element");
// }



// Завдання 13:
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


// первый способ 
// function slugify(title) {
//     let lower = title.toLowerCase();
//     let words = lower.split(" ");
//     let slug = words.join("-");
//     return slug;
// }

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// // второй способ
// function slugify(title) {
//     return title.toLowerCase().split(" ").join("-");
// }


// Завдання 14:

// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.



// первый способ  
// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = [...firstArray, ...secondArray];
//     if (newArray.length > maxLength) {
//         return newArray.slice(0, maxLength);
//     } else {
//         return newArray;
//     }
// }


// второй способ 
// function makeArray(firstArray, secondArray, maxLength) {
//     let result = firstArray.concat(secondArray); 
//      if (result.length > maxLength) {
//        return result.slice(0, maxLength)
//      } else {
//        return result;  
//      }
//    }


// третий способ
// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray);
//     return newArray.length > maxLength ? newArray.slice(0, maxLength) :
//         newArray;
// }



    // console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
    // console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
    // console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
    // console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
    // console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
    // console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []





// Завдання 15:
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.
// Усередині функції:
// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.



    // function filterArray(numbers, value) {
    //     const array = [];
    //     for (let i = 0; i < numbers.length; i++) {
    //       const element = numbers[i];
    //       if (element > value) {
    //         array.push(element);
    //       }
    //     }
    //     return array;
    //   }



// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
