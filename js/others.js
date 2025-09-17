// Завдання 1: Робота з масивом
// text // 
// Створіть масив genres з елементами 'pop' і 'rock'
// Додайте до початку масиву елемент 'hip-hop' за допомогою відповідного методу масивів
// Знайдіть елемент 'rock' у масиві та замініть його на 'metal', використовуючи JavaScript-код

// const genres = ['pop', 'rock'];
// genres.push('hip-hop');
// for (let i = 0; i < genres.length; i++) {
//     const element = genres[i];
//     if (element === 'rock'){
//         genres[i] = 'metal';
//     }
// }
// console.log(genres);


// Напишіть функцію printItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "Елемент <номер елемента>: <значення елемента>".
// Використайте цикл forEach для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1.


// function printItems(array) {
//   if (!Array.isArray(array) || array.length === 0) return;
//   for (let i = 0; i < array.length; i++) {
//       console.log(`${i + 1} : ${array[i]}`)
//   }
// }
// printItems(["jazz", "classic", 'rock-n-roll']);



// Завдання 2: Перевірка даних користувача
// text // 
// Напишіть функцію checkEmail(array), яка:
// Приймає масив email-адрес як аргумент.
// Запитує email користувача через prompt.
// Перевіряє, чи є введений email у переданому масиві.
// Якщо email є в масиві – виводить повідомлення через alert: "Email found: <email>!"
// Якщо email відсутній – виводить повідомлення: "Email not found".

// const emails = ["test1@gmail.com", "user2@yahoo.com", "myemail@outlook.com"];
// function checkEmail(array) {
//     const userEmail = prompt("Enter your email");
//     let message;
//     if (array.includes(userEmail)) {
//         message = `Email found: ${userEmail}!`;
//     } else {
//         message = "Email not found";
//     }
//     alert(message);
// }

// checkEmail(emails);




// Завдання 3: Обчислення медіани
// text // 
// Напишіть функцію calculateMedian(),
// яка приймає довільну кількість аргументів і повертає їхнє медіанне значення.
// Додайте перевірку, що аргументи - це числа.
// Якщо аргументи не є числами, поверніть 'Invalid input'.
// (Примітка: для медіани відсортуйте числа і знайдіть середнє значення або середні два значення).

// function calculateAverage(...args) {
//   if (args.length === 0) {
//       return 'Invalid input';
//   }
//   let total = 0;
//   for (const arg of args) {
//       if (typeof arg !== "number" || isNaN(arg)) {
//           return 'Invalid input';
//       }
//       total += arg;
//   }
//   return total / args.length;
// }
// console.log(calculateAverage(1, 2, 3, 4, 5)); // 3
// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(1, 'a', 3)); // 'Invalid input'



// Завдання 4: Сума парного індексу
// text// Напишіть функцію sumEvenIndex(numbers),
// яка приймає масив чисел і повертає новий масив,
// що містить суми елементів із парними індексами (0, 2, 4, ...).

// Наприклад:
// const numbers = [10, 20, 30, 40, 50, 60];
// Результат: [10 + 30, 30 + 50, 50 + 60] = [40, 80, 110]

// function sumEvenIndex(numbers) {
//   const result = []; 
//   for (let i = 0; i < numbers.length; i += 2) {
//       const sum = numbers[i] + (numbers[i + 2] || 0);
//       result.push(sum);
//   }
//   return result;    
// }  
// const numbers = [10, 20, 30, 40, 50, 60];


// Завдання 5: Пошук найбільшого числа
// text// Напишіть функцію findLargestNumber(numbers),
// яка шукає найбільше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найбільше число,
// в іншому випадку - поверніть 'Sorry, it is not an array!'.

// const numbers = [15, 3, 67, 22, 9, 45, 1, 88, 12];

// function findLargestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//       return 'Sorry, it is not an array!';
//   }
//   if (numbers.length === 0) {
//       return 'Array is empty!';
//   }
//   let largest = numbers[0];
//   for (const number of numbers) {
//       if (typeof number !== "number" || isNaN(number)) {
//           return 'Array contains non-numeric values!';
//       }
//       if (number > largest) {
//           largest = number;
//       }
//   }
//   return largest;  
// }

// console.log(findLargestNumber(numbers)); // 88
// console.log(findLargestNumber("not an array")); // 'Sorry, it is not an array!'
// console.log(findLargestNumber([])); // 'Array is empty!'
// console.log(findLargestNumber([1, 2, "three"])); // 'Array contains non-numeric values!'           


// Завдання 6: Робота з масивом об'єктів
// text// Напишіть функцію getUserNames(users),
// яка приймає масив об'єктів користувачів і повертає масив їхніх імен (властивість name).
// Використовуйте деструктуризацію для доступу до властивостей об'єкта user.


// const getUserNames = (users) => users.map(user => user.name);

// console.log(
//     getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764
//     },
//   ])
//   ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


// Завдання 12: Робота з масивом об'єктів 2
// text// Напишіть функцію getUsersWithFriend(users, friendName),
// яка приймає масив об'єктів користувачів і ім'я друга,
// і повертає масив користувачів, у яких є друг з таким ім'ям.
// Використовуйте деструктуризацію для доступу до властивостей об'єкта user.

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName));
//   };

// const allUsers = [
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"]
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"]
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"]
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"]
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"]
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"]
//     }
//   ];
  
//   console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
//   [
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"]
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"]
//     }
//   ]
  
//   console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
  // [
  //   {
  //     name: "Elma Head",
  //     friends: ["Goldie Gentry", "Aisha Tran"]
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"]
  //   }
  // ]
  
//   console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
  
// const sortByDescendingFriendCount = users => {
//     return users.toSorted((a, b) => b.friends.length - a.friends.length);
// }


// console.log(
//     sortByDescendingFriendCount([
//       {
//         name: "Moore Hensley",
//         friends: ["Sharron Pace"],
//         gender: "male"
//       },
//       {
//         name: "Sharlene Bush",
//         friends: ["Briana Decker", "Sharron Pace"],
//         gender: "female"
//       },
//       {
//         name: "Ross Vazquez",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         gender: "male"
//       },
//       {
//         name: "Elma Head",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         gender: "female"
//       },
//       {
//         name: "Carey Barr",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         gender: "male"
//       },
//       {
//         name: "Blackburn Dotson",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         gender: "male"
//       },
//       {
//         name: "Sheree Anthony",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         gender: "female"
//       }
//     ])
//   );
  // [
  //   {
  //     name: "Ross Vazquez",
  //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Sharlene Bush",
  //     friends: ["Briana Decker", "Sharron Pace"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Elma Head",
  //     friends: ["Goldie Gentry", "Aisha Tran"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Carey Barr",
  //     friends: ["Jordan Sampson", "Eddie Strong"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Blackburn Dotson",
  //     friends: ["Jacklyn Lucas", "Linda Chapman"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Moore Hensley",
  //     friends: ["Sharron Pace"],
  //     gender: "male"
  //   }
  // ]


// const getTotalBalanceByGender = (users, gender) => {
//     if (!Array.isArray(users) || users.length === 0) return 0;
//     return users
//         .filter(user => user.gender === gender && user.balance)
//         .reduce((total, user) => total + user.balance, 0);
// };


// const clients = [
// 	{
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863



// Метод this


// const plalist = {
//   name: "My playlist",
//   tracks: ["track-1", "track-2"],
//   rating: 4,
//   changeName(nemName) {
//     console.log(this);
//     this.name = nemName;
//     playalist.name = nemName;
//   }
// }

// const playlist2 = {
//   name: "My playlist",
//   tracks: ["track-3", "track-4"],
//   rating: 5,
// }

// playlist2.change2Name = plalist.changeName;

// playlist.change2Name("Sports playlist");

// playalist.changeName("New playlist");

// console.log(playlist2);
// console.log(plalist);



// const plalist = {
//   name: "My playlist",
//   tracks: ["track-1", "track-2"],
//   rating: 4,
//   changeName(nemName) {
//     console.log(this);
//     this.name = nemName;
//     playalist.name = nemName;
//   },
//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   }
// }

// playlist.changeName("New playlist");
// plalist.addTrack("track-3");
// plalist.updateRating(5);
// console.log(plalist.getTrackCount());
// console.log(plalist);




// Синтаксис rest (складае)

// function foo(a, b, ...rest) {
//   console.log(a, b);
//   console.log(rest);
// }

// foo(1, 2, 3, 4, 5);




// // Синтаксис spread (розгортае)

// const arr = [
//   1000,
//   ...[1, 2, 3],
//   4000,
//   ...[5, 6, 7],
//   8000
// ];

// console.log(arr);


// // Пошук найменшого або найбильшой теиператури (числа)

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.min(...temps));
// console.log(Math.max(...temps));




// створення масиву и тип за посылання

// const a = [1, 2, 3];
// const b = [...a]; // 1, 2, 3
// console.log(a);
// console.log(b); 

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a]; // [{ x: 1 }, { y: 2 }, { z: 3 }]


// a[0].x = 1000;

// console.log(a);
// console.log(b);



// поеднаемо декилька масивов в один через spread

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [7, 8, 9];

// const all = [...a, ...b, ...c];

// console.log(all);



// // створення обєкту 

// const objA = { x: 1, y: 2 };

// const objB = { x: 0, q: 3, };

// const objC = {
//   ...objA, // { x: 1, y: 2 }
//   x: 10, // { x: 10, y: 2 }
//   ...objB,  // { x: 0, y: 2, q: 3 } 
//   y: 20 // { x: 0, y: 20, q: 3 }
// };

// такий синтаксис перезаписує властивості обєкту




// // Задання 10: Банк
// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };



/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],



//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const obj = { id: amount, amount, type };
//     return obj;
//   },





  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;

//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },





//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if(amount > this.balance) {
//       console.log("недостатньо коштів");
//       return;
//     }

//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },





//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },





//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for(const item of this.transactions) {
//       if(item.id === id) {
//         return item;
//       }
//     }

//     return "Not found";
//   },





//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let sum = 0;

//     for(const item of this.transactions) {
//       if(item.type === type) {
//         sum += item.amount;
//       }
//     }

//     return sum;
//   },
// };


// account.deposit(300);
// account.deposit(100);
// account.withdraw(200);

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(500));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));


// console.log(account);



// Завдання 11: Функції зворотного виклику (callback)
// text// Напишіть функцію each(array, callback),
// яка приймає масив та функцію зворотного виклику (callback).
// Функція each повинна застосувати callback до кожного елемента масиву
// і повернути новий масив із результатами виклику callback для кожного елемента.

// Приклад використання:
// each([64, 49, 36, 25, 16], function(value) { return value * 2; });
// Повертає: [128, 98, 72, 50, 32]


// function each(array, callback) {
//   const newArray = [];
//   for (const item of array) {
//     newArray.push(callback(item));
//   }
//   return newArray;
// }

// each([64, 49, 36, 25, 16], function (value) {
//   return value * 2;
// });

// each([64, 49, 36, 25, 16], function (value) {
//   return value - 10;
// });

// console.log(each([64, 49, 36, 25, 16], function (value) { 
//   return Math.sqrt(value);
// }));


// явне вовернення функції

// const addArrow = (a, b) => {
//   return a + b;
// }

// console.log(addArrow(10, 20));


// // неявне вовернення функції

// const addArrow = (a, b) => a + b;

// console.log(addArrow(10, 20));

  
// const fnB = a => ({ a : 20});
// console.log(fnB(10));


// const calc = (a, b, callback) => {
//   const res = callback(a, b);
//   const str = res + "!!!";
//   return str;
// }
// console.log(calc(10, 20, (x, y) => x + y));



// const calculate = (...arguments) => {
//   let total = 0;
//   arguments.forEach(item => total += item); 
//   return total; 
// }

// console.log(calculate(1, 2, 3, 4, 5)); // 15




/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

// const allCars = [
//   { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//   { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//   { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//   { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//   { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//   { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//   { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//   { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//   { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//   { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];

/**
* Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
*/

// const getModels = (cars) => {
//     return cars.map((cars) => cars.model)
// };

// console.log(getModels(allCars));


/**
* Нехай функція getModels повертає масив (поле price) всіх автомобілів.
*/


// const getModels = (priceModels) => {
//   return priceModels.map((priceModels) => priceModels.price)
// }
// console.log(getModels(allCars));



// 
/**
* Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
* значенням властивості price залежно від переданої знижки.
*/

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => {
//     return {
//       ...car,
//       price: car.price * (1 - discount)
//       }
//     })
// }


// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));
// console.table(makeCarsWithDiscount(allCars, 0.6));




// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

/*
* Збільшуємо кількість годин гравця за id
// */
// const playerId = "player-4";


// const newPlayers = players.map((item) => {
//     if(item.id === playerId) {
//         return {
//             ...item,
//             timePlayed: item.timePlayed + 100
//         }
//     }

//     return item;
// })

// console.table(newPlayers);


// ------------------------------- 5

/**
* Метод flatMap
*/

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];


// метод flatMap

// const tags = tweets.flatMap((tweet) => tweet.tags);

// console.log(tags);


// const numbers = [5, 10, 15, 20, 25];
// const res = numbers.filter((item) => item > 10;
// );
// console.log(res);


// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];


// метод filter
// const filterByPrice = (cars, threshold) => {
//   return cars.filter((car) => car.price < threshold)
// }
// console.table(filterByPrice(allCars, 30000));


// метод find


// const numbers = [5, 10, 15, 20, 25];
// const res = numbers.find((item) => item > 10);
// console.log(res);


// const getCars = (arr, model) => {
//   return arr.find((car) => car.model === model);
// }
// console.log(getCars(allCars, "Accord"));



// const numbers = [1, 3, 24, 25, 40];

// const total = numbers.reduce((acc, numbers) => acc + numbers, 0);
// console.log(total);


// const salary = {
//   Alex: 100,
//   Tom: 50,
//   Lola: 300,
// }

// const values = Object.values(salary);

// const total = values.reduce((acc, value) => acc + value, 0);
// console.log(total);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const totalTime = players.reduce((acc, player) => acc + player.points, 0);
// console.log(totalTime);

// // порахувати сумму 
// const total = players.reduce((acc, item) => acc + item.timePlayed * item.points, 0);
// console.log(total);


// Ланцюжок методу

// const numbers = [3, 4, 7, 5, 10];

// const result = numbers
//   .filter((num) => num > 4)
//   .map((num) => num * 2)
//   .toSorted((a, b) => a - b)

//   console.log(result);


// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.call(mango, "Welcome");
// greet.call(poly, "Aloha");




// const a = () => {
// 	console.log(this);
// };

// function b() {
// 	a();
// }

// b.call({ user: "Mango" });


// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee);




// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//     this.blacklistedEmails =[];
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email){
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]



// class Storage {
//   #items;
//   constructor(arg) {
//     this.#items = arg;
//   }
  
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
  
//   removeItem(itemToRemove) {
//     const polo = this.#items.indexOf(itemToRemove);
//     if (polo !== -1) {
//       this.#items.splice(polo, 1);
//     }
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value = this.#value + str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.#value = str + this.#value + str;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// class Car {

//   #price;

//   constructor(obj) {
//     this.brand = obj.brand;
//     this.model = obj.model;
//     this.#price = obj.price
//   }
//   getModel() {
//     return this.model;
//   }
//   changeModel(newModel) {
//     this.model = newModel;
//   }
//   get price() {
//     return this.#price
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// } 

// const bmw = new Car({
//   brand: "BMW",
//   model: "X5",
//   price: 70000
// });

// bmw.price = bmw.price + 5000;

// console.log(bmw.price);

// console.log(bmw);



// Наслідування класів


// class Hero {
//   constructor(obj) {
//     this.name = obj.name;
//     this.xp = obj.xp;
//   }
//   gainXp() {
//     this.xp += amount;
//     console.log(`${this.name} received ${amount} xp`);   
//   }
// }

// class Paladin extends Hero {
//   constructor(obj) {
//     super({
//       name: obj.name,
//       xp: obj.xp
//     })
//     this.weapon = obj.weapon;
//   }
//   attack() {
//     console.log(`${this.name} attacks with ${this.weapon}`);
    
//   }
// }

// const arthas = new Paladin({ name: "Arthas", xp: 1000, weapon: "sword" })

// arthas.gainXp(500);

// console.log(arthas);


/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: 
 *    User ${email} is ${age} years old and has ${numPosts} posts.
 * 
 * - Додай метод updatePostCount(value), який у параметрі value 
 *    приймає кількість постів, які потрібно додати користувачеві.
 */


// class Blogger {
//     constructor(obj) {
//         this.email = obj.email;
//         this.age = obj.age;
//         this.numberOfPosts = obj.numberOfPosts;
//         this.topics = obj.topics;
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }


// const alice = new Blogger({
//     email: "alice@gmail.com",
//     age: 30,
//     numberOfPosts: 20,
//     topics: ["tech", "gaming"]
// });

// alice.updatePostCount(10);
// console.log(alice.getInfo());
// console.log(alice);


// const petya = new Blogger({
//     email: "petya@gmail.com",
//     age: 20,
//     numberOfPosts: 10,
//     topics: ["cooking"]
// })

// petya.updatePostCount(2);
// console.log(petya.getInfo());
// console.log(petya);


/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */


// class User {
//     #login;
//     #email;

//     constructor(obj) {
//         this.#login = obj.login;
//         this.#email = obj.email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(str) {
//         this.#email = str;
//     }

// }


// const alice = new User({ login: "Alice", email: "alice@gmail.com" });


// alice.login = "Super Alice";
// console.log(alice.login);

// alice.email = "super_puper@gmail.com";
// console.log(alice.email);


// console.log(alice);


// Деструктуризація в циклах

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }


// Глибока деструктуризація

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// // console.log(likes); // 1308

