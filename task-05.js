
const addName = document.getElementById('name-input')
const newName = document.getElementById('name-output')

addName.addEventListener('input', elm => {
    const userName = elm.target.value
    newName.textContent = userName
})



/*
Напиши скрипт который, при наборе текста в инпуте input#name-input 
(событие input), 
подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/
