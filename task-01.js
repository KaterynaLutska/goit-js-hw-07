// task 01-01 //

const numberOfLi = document.querySelectorAll('li.item').length;
console.log(`В списку ${numberOfLi} категорії.`);

// task 01-02 // 

const nameOfCategories = document.querySelectorAll('h2').forEach((name) => {
    console.log(`Категорія: ${name.textContent}\nКількість елементів: ${name.nextElementSibling.childElementCount}`)  
})


