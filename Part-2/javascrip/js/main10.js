const btn1 = document.querySelector('#btn1')    
const btn2 = document.querySelector('.btn2')

function handleClick(){
    console.log('Kliknięto przycisk nr 1');
}

function add(){
    console.log(2 + 2);
}

btn1.addEventListener('click', handleClick)
//po kliknięciu wyświetli komunikat z określonej funkcji

btn2.addEventListener('click', add)