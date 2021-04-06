//створити функцію яка приймає масив та виводить його
function funcArrCars() {
    let ArrayStrings = ["fiat", "toyota", "peugeot", "citroen", "nissan"];
    for (let item = 0; item<5; item = item + 1) {
        console.log(ArrayStrings);
    }
    return(ArrayStrings);
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
function funcNumSum (ArrNumbers = [10, 20, 30]) {
    let Sum = 0;
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        Sum= Sum+ArrNumbers[item];
    }
    return(Sum);
}
console.log(funcNumSum());

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function funcNumAverage (ArrNumbers = [10, 20, 30]) {
    let Sum=0;
    let Average = 0;
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        Sum= Sum+ArrNumbers[item];
        Average=(Sum/ArrNumbers.length);
    }
    return(Average);
}
 console.log(funcNumAverage());