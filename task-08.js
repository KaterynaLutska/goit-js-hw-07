const divControls = document.getElementById('controls')
const btnRend = document.querySelector(`[data-action="render"]`);
const btnDestr = document.querySelector(`[data-action="destroy"]`)
const input = document.querySelector('div input')
const divBoxes = document.getElementById('boxes')

btnRend.addEventListener('click', () => {
    console.log(input.value);
    createBoxes()
})

btnDestr.addEventListener('click', () => {
    input.value = 0;
})

const createBoxes = function (amount) {


    amount = input.value 
    const divBox = document.createElement('div')
    console.log(divBox);

    console.log(`Число: ${amount}`);
}



/*
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку 
'Создать', после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), 
которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount 
и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes. */