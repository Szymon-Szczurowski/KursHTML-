const color = 'niebieski' 
let age = 25 
const userName = 'Szymon'

//const zmienna stała, której nie zmieniamy np. color = 'czerwony' nie można
//let zmienna dynamiczna, któa można zmieniać np age = 33 można


//Można też deklarować puste zmienne np.
let age

console.log(age); //wywołanie w konsoli color

console.log('Cześć mam na imię ' + userName + ' mam ' + age + ' lat i mój ulubiony kolor to ' + color); 
//Wyświetlenie zdania

console.log(`Cześć, mam na imię ${userName}, mam ${age} lat i mój ulubiony koor to ${color}`)
//Nowszy i lepszy zapis