//створити функцію яка приймає масив та виводить його
function funcArrCars() {
    let ArrayRandomNumbers = ["fiat", "toyota", "peugeot", "citroen", "nissan"];
    for (let item = 0; item < 5; item = item + 1) {
        console.log(ArrayRandomNumbers[item]);
    }
}
funcArrCars();

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function funcArrRandNum() {
    let ArrayRandomNumbers = [];
    for (let item = 0; item < 5; item = item + 1) {
        ArrayRandomNumbers[item] = Math.floor(Math.random() * 10);
        console.log(ArrayRandomNumbers[item]);
    }
}
funcArrRandNum();

// створити функцію яка повертає найменше число з масиву. (Без Math.min!)
function funcNumMin(ArrNumbers = [10, 20, 30]) {
    let min = ArrNumbers[0];
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        if (ArrNumbers[item] < min) {
            min = ArrNumbers[item];
        }
    }
return(min);
console.log(min);
}

funcNumMin();
// створити функцію яка повертає найбільше число з масиву (Без Math.max!)
function funcNumMax (ArrNumbers = [10, 20, 30]) {
    let max = ArrNumbers[0];
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        if (ArrNumbers[item] > max) {
            max = ArrNumbers[item];
        }
    }console.log(max);
    return(max);
}
funcNumMax()

// функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його
function funcNumSumm (ArrNumbers = [10, 20, 30]) {
    Summ = 0;
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        Summ= Summ+ArrNumbers[item];
    }
    console.log(Summ);
    return(Summ);
}
funcNumSumm()