
const inputSize = document.getElementById('font-size-control')
const spanText = document.getElementById('text')

inputSize.addEventListener('input', () => {
    spanText.style.fontSize = `${inputSize.value}px`;
})


/*
Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет инлайн-стиль 
span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.
*/
