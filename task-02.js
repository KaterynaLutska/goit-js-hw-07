// task 02 //

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// 1 method кращий  //

const ingList = document.getElementById("ingredients");

const ingredientsItems = (el) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = el;
  return itemRef;
};

const list = ingredients.map((item) => ingredientsItems(item));
ingList.append(...list);

// 2 method гірший //

// const ingredientsList = document.getElementById("ingredients");
// const ingredientsItems = [];

// ingredients.map((li, ingredient) => {
//   li = document.createElement("li");
//   for (let i = 0; i <= ingredients.length; i++) {
//     li.textContent = ingredients[ingredient];
//     ingredientsItems.push(li);
//   }
//   return ingredientsItems;
// });

// ingredientsList.append(...ingredientsItems);

/* 
Напиши скрипт, который для каждого элемента массива
ingredients создаст отдельный li, 
после чего вставит все li за одну операцию в список
ul.ingredients. 
Для создания DOM-узлов используй document.createElement() */
