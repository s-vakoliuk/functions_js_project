//створити функцію яка приймає масив та виводить його
function funcArrCars() {
    let ArrayRandomNumbers = ["fiat", "toyota", "peugeot", "citroen", "nissan"];
    for (let item = 0; item < 5; item = item + 1) {
        console.log(ArrayRandomNumbers[item]);
    }
    return(ArrayRandomNumbers);
}
console.log(funcArrCars());

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function funcArrRandNum(ArrayRandomNumbers = []) {
    for (let item = 0; item < 5; item = item + 1) {
        ArrayRandomNumbers[item] = Math.floor(Math.random() * 10);
    }
    return(ArrayRandomNumbers)
}
console.log(funcArrRandNum());

// створити функцію яка повертає найменше число з масиву. (Без Math.min!)
function funcNumMin(ArrNumbers = [10, 20, 30]) {
    let min = ArrNumbers[0];
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        if (ArrNumbers[item] < min) {
            min = ArrNumbers[item];
        }
    }
return(min);
}
console.log(funcNumMin());

// створити функцію яка повертає найбільше число з масиву (Без Math.max!)
function funcNumMax (ArrNumbers = [10, 20, 30]) {
    let max = ArrNumbers[0];
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        if (ArrNumbers[item] > max) {
            max = ArrNumbers[item];
        }
    }
    return(max);
}
console.log(funcNumMax());

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його
function funcNumSumm (ArrNumbers = [10, 20, 30]) {
    Summ = 0;
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        Summ= Summ+ArrNumbers[item];
    }
    return(Summ);
}
console.log(funcNumSumm());

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function funcNumAverage (ArrNumbers = [10, 20, 30]) {
    Summ=0;
    Average = 0;
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        Summ= Summ+ArrNumbers[item];
        Average=(Summ/ArrNumbers.length);
    }
    return(Average);
}
 console.log(funcNumAverage());

//Створити функцію яка приймає масив будь яких об'єктів, та повертає масив ключів всіх обєктів
// EXAMPLE:[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function ArrObjects(User){
    let=User[0];
    let UsersObj = {
    name: 'Dima',
    age: 13,
    model: 'Camry'}
    for (const item of users) {
        User=UsersObj[item];
    return(User);
}
}
console.log(ArrObjects());