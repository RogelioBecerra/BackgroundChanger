
const form = document.querySelector('form');
const input = document.querySelector('#myInput');
const body = document.querySelector('Body');
body.style.backgroundColor = '#fef';

body.style.backgroundColor = localStorage.getItem("background-color");

form.addEventListener('submit', () => {
    if(input.value != ''){
        localStorage.setItem('background-color', input.value);
        body.style.backgroundColor = localStorage.getItem('background-color')
        form.reset()
    }
})



