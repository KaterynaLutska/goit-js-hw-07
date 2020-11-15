const input = document.getElementById('validation-input');
let i;
input.classList.add('validation-input');
input.addEventListener('focus', (elem) => {
    const users = elem.target.value;
    for (i = 0; i <= users.length; i++) {
 i <= 6 ? input.classList.add('valid') : input.classList.add('invalid')
    }
})


/*
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, 
то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

*/