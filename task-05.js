const addName = document.getElementById("name-input");
const newName = document.getElementById("name-output");

// 1 method // 
// тернарний оператор або для привласнення значення змінним, 
// або для поверненя значеньь поряд з return 

// addName.addEventListener("input", (elem) => {
//   elem.target.value != ""
// 	? (newName.textContent = elem.target.value)
// 	: (newName.textContent = "незнайомець");
// });

// 2: method better // 
const templateName = newName.textContent;
addName.addEventListener("input", handelInput);
function handelInput(elm) {
  newName.textContent =
    elm.target.value !== "" ? elm.target.value : templateName;
}




/* 
Напиши скрипт который, при наборе текста в инпуте input#name-input 
(событие input), 
подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/
