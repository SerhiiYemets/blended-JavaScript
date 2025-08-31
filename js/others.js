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
