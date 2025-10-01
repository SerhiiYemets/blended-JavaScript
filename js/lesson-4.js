// Завдання 1:

// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// // 1)
// const bodyEl = document.querySelector("body");
// console.log(bodyEl);
// // 2)
// const titleEl = document.querySelector("#title");
// console.log(titleEl);
// // 3)
// const listEl = document.querySelector(".list");
// console.log(listEl);
// // 4)
// const dataEl = document.querySelectorAll("[data-topic]");
// console.log(dataEl);
// // 5)
// console.log(dataEl[0]);
// // 6)
// console.log(dataEl[dataEl.length - 1]);
// // 7)
// const h1El = document.querySelector("h1");
// console.log(h1El.nextElementSibling);
// // 8)
// const h3El = document.querySelectorAll("h3");
// console.log(h3El);
// // 9)
// h3El.forEach(el => el.classList.add("active"));
// console.log(h3El);
// // 10)
// const liEl = document.querySelector('li[data-topic="navigation"]');
// console.log(liEl);
// // 11)
// const liEls = document.querySelectorAll('li[data-topic="navigation"]');
// liEls.forEach(el => {
//     el.style.backgroundColor = "yellow";
// });
// // 12)
// const liElement = document.querySelector('li[data-topic="navigation"]');
// if (liElement) {
//     const pLiEl = liElement.querySelector("p");
//     if (pLiEl) {
//         pLiEl.textContent = "Я змінив тут текст!";
//     };
// }; 
// // 13)
// const currentTopic = "manipulation"
// const dataEls = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(dataEls);
// // 14)
// const dataElement = document.querySelector(`[data-topic="${currentTopic}"]`);
// dataElement.style.backgroundColor = "lightblue";
// // 15)
// const hEl = document.querySelector('h3.completed');
// if (hEl) {
//     console.log(hEl);
// } else {
//     console.log(`Елемент 'h3.completed' не знайдено`);
// }
// //16)
// document.querySelector('h3.completed').closest('li').remove();

// // const h3 = document.querySelector('h3.completed'); 
// // const li = h3 && h3.closest('li');
// // if (li) li.remove(); 
// // 17)
// const navP = document.querySelector("h1");
// const pEl = document.createElement("p");
// pEl.textContent = "Об'єктна модель документа (Document Object Model)";
// navP.insertAdjacentElement("afterend", pEl);
// console.log(pEl);
// // 18)

// const navEl = document.querySelector(".list");
// const navItemEL = document.createElement("li");
// const navH3 = document.createElement("h3");
// navH3.textContent = "Властивість innerHTML";
// const navPel = document.createElement("p");
// navPel.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// navItemEL.appendChild(navH3);
// navItemEL.appendChild(navPel);
// navEl.appendChild(navItemEL);

// console.log(navItemEL);

// // 19)
// const navItemEl = document.querySelector(".list");

// const navElHtml = `
//     <li>
//         <h3>Властивість innerHTML</h3>
//         <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//     </li>
// `;

// navEl.insertAdjacentHTML("afterbegin", navElHtml);

// console.log(navItemEl);

// // 20)
// const navElDelet = document.querySelector(".list");
// navEl.innerHTML = "";



// Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const numberContainer = document.querySelector('.number-container')
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// for (let i = 0; i < 100; i++) {
//     const divEL = document.createElement('div');
//     divEL.classList.add('number');
//     const number = randomNumber();
//     divEL.textContent = number;
//     if (number % 2 === 0) {
// //         divEL.classList.add('even');
// //     } else {
// //         divEL.classList.add('odd');
// //     }
// //     numberContainer.appendChild(divEL);
// // };


// Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// // Використовуй шаблон форми з файлу html.

// // 1 - При події `input`, якщо користувач ввів в поле більше 
// // 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// // то клас `error`

// 1. Знайти елемент <input> за ID
// const inputElement = document.querySelector('username');

// inputElement.addEventListener('input', (event) => {
//     const value = event.target.value;
//     if (value.length >= 6) {
//         inputElement.classList.add('success');
//         inputElement.classList.remove('error');
//     } else {
//         inputElement.classList.add('error');
//         inputElement.classList.remove('success');
//     }
// });


// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`


// const focusElement = document.querySelector('input');
// focusElement.addEventListener('focus', (event) => {
//     const value = event.target.value;
//     if (value === '') {
//         event.target.style.outline = '3px solid red';
//     } else {
//         event.target.style.outline = '3px solid green';
//     }
// });


// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`


// const blurElement = document.querySelector('input');
// blurElement.addEventListener('blur', (event) => {
//     const value = event.target.value;
//     if (value === '') {
//         event.target.style.outline = '3px solid red';
//     } else {
//         event.target.style.outline = '3px solid lime';
//     }
// });


// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.
// Отримуємо елементи форми
// const form = document.querySelector('form');
// const input = document.querySelector('input[type="text"]');
// const checkbox = document.querySelector('input[type="checkbox"]');
// const span = document.querySelector('span');

// // Функція для оновлення тексту в span
// function updateSpanName(value) {
//     span.textContent = value.trim() ? value : 'Anonymous';
// }

// // Подія input для оновлення span
// input.addEventListener('input', (e) => {
//     updateSpanName(e.target.value);
// });

// Подія submit для форми
// form.addEventListener('submit', (e) => {
//     // Відміна поведінки за замовчуванням
//     e.preventDefault();
    
//     // Отримуємо значення з інпуту
//     const userName = input.value.trim();
    
//     // Перевірка умов
//     if (!userName) {
//         alert('Будь ласка, введіть ім\'я');
//         return;
//     }
    
//     if (!checkbox.checked) {
//         alert('Будь ласка, підтвердіть чекбокс');
//         return;
//     }
    
//     // Створюємо об'єкт з даними
//     const userData = {
//         userName: userName
//     };
    
//     // Виводимо в консоль
//     console.log(userData);
    
//     // Очищаємо форму
//     input.value = '';
//     checkbox.checked = false;
//     updateSpanName('');
// });

// Завдання 4:

 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// document.querySelector('decrease').addEventListener('click', () => {
//     const square = document.getElementById('square');
//     let currentSize = parseInt(getComputedStyle(square).width);
//     square.style.width = (currentSize - 20) + 'px';
//     square.style.height = (currentSize - 20) + 'px';
// });

// document.querySelector('increase').addEventListener('click', () => {
//     const square = document.getElementById('square');
//     let currentSize = parseInt(getComputedStyle(square).width);
//     square.style.width = (currentSize + 20) + 'px';
//     square.style.height = (currentSize + 20) + 'px';
// });


// Завдання 5
// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.
// */


// const statList = document.querySelector('.statList')
// const resultSection = document.querySelector('#resultSection')
// const resultButton = document.querySelector('#resultButton')

// let sumNumber = 0;

// statList.addEventListener('click', onStatListItemClick);


// function onStatListItemClick(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     const dataNumber = Number(event.target.dataset.number);
//     sumNumber += dataNumber;
//     console.log(dataNumber); 
// }

// function onResultButtonClick() {
//     resultSection.innerHTML = `Сумма значень з data-антрибутів ${sumNumber}`;
//     sumNumber = 0;
// }


// Дата та час

// const date = new Date();
// console.log(date.getTime());



const startTime = Date.now();
// Твій код, виконуваний упродовж деякого часу
for(let i = 0; i <= 100; i += 1) {
	console.log(i);
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);

