// task-04

const decBtn = document.querySelector('[data-action ="decrement"]');
const incBtn = document.querySelector('[data-action ="increment"]');
const count = document.getElementById(`value`);

// 1 method fixed //

let counterValue = 0;
incBtn.addEventListener("click", () => {
  counterValue += 1;
  count.textContent = counterValue;
});

decBtn.addEventListener("click", () => {
  counterValue -= 1;
  count.textContent = counterValue;
});

// let counterValue = 0;
// function increment() {
//   incBtn.addEventListener("click", () => {
//     counterValue += 1;
//     count.textContent = counterValue;
//   });
// }
// increment();
// function decrement() {
//   decBtn.addEventListener("click", () => {
//     counterValue -= 1;
//     count.textContent = counterValue;
//   });
// }
// decrement();

// 2 method  добре //

// class Counter {
//   constructor() {
//     this.counterValue = 0;
//   }
//   toIncrement() {
//     this.counterValue += 1;
//     count.textContent = this.counterValue;
//   }
//   toDecrement() {
//     this.counterValue -= 1;
//     count.textContent = this.counterValue;
//   }
// }

// const myCounter = new Counter();

// incBtn.addEventListener("click", () => {
//   myCounter.toIncrement();
// });

// decBtn.addEventListener("click", () => {
//   myCounter.toDecrement();
// });

/*
Счетчик состоит из спана и кнопок, которые должны 
увеличивать и уменьшать значение счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */
