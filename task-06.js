const input = document.getElementById('validation-input');
const number = document.querySelectorAll(`[data-length="6"]`)


input.classList.add('validation-input');

input.addEventListener('blur', (elem) => {
    elem.preventDefault()
    const users = elem.target.value;

    users.length <= input.dataset.length
        ? input.classList.add('valid') || input.classList.remove('invalid')
        : input.classList.add('invalid') || input.classList.remove('valid')
})


/*
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, 
то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

*/