const addName = document.getElementById("name-input");
const newName = document.getElementById("name-output");

// 1 method //

// addName.addEventListener("input", (elem) => {
//   if (elem.target.value != "") {
//     newName.textContent = elem.target.value;
//   } else {
//     newName.textContent = "незнайомець";
//   }
// });

// 2 method ternary operator //

// addName.addEventListener("input", (elem) => {
//   elem.target.value != ""
//     ? (newName.textContent = elem.target.value)
//     : (newName.textContent = "незнайомець");
// });

/* Питання 1 !!! // 
Тань, винекло питання, яке рішення стилістично краще 

1 варіант: 
addName.addEventListener("input", (elem) => {
  elem.target.value != ""
	? (newName.textContent = elem.target.value)
	: (newName.textContent = "незнайомець");
});

2: варіант: 
addName.addEventListener("input", x);
function x(elm) {
  newName.textContent =
    elm.target.value != "" ? elm.target.value : "незнайомець";
}

Питання 2 
а чи можемо ми достукатись до самого слова "незнайомець"? 
Дякую! 


/* 
Напиши скрипт который, при наборе текста в инпуте input#name-input 
(событие input), 
подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/
