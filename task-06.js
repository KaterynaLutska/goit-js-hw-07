const input = document.getElementById("validation-input");
const number = document.querySelectorAll(`[data-length="6"]`);

input.classList.add("validation-input");

 input.addEventListener("blur", (elem) => {
   const users = elem.target.value;
   const value = input.dataset.length;
   if (users.length === 0) {
     input.classList.remove("valid");
     input.classList.remove("invalid");
}
   else if (users.length === +value) {
     input.classList.add("valid");
      input.classList.remove("invalid");
   }
   else  {
     input.classList.remove("valid");
     input.classList.add("invalid");
   }
});

/// 
// input.addEventListener("blur", (elem) => {
//   const users = elem.target.value;
//   const value = input.dataset.length;
//   if (users.length === 0) {
//     input.classList.remove("valid") || input.classList.remove("invalid");
//   } else if (users.length === +value) {
//     input.classList.add("valid") || input.classList.remove("invalid");
//   } else if (users.length !== value) {
//     input.classList.add("invalid");
//   }
// });

/*
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, 
то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

*/
