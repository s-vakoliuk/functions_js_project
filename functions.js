//створити функцію яка приймає масив та виводить його
function funcArrCars(ArrayStrings) {
    for (let item = 0; item<ArrayStrings.length; item = item + 1) {
        console.log(ArrayStrings[item]);
    }
    return ArrayStrings;
}
funcArrCars(["fiat", "toyota", "peugeot", "citroen", "nissan"]);

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function funcArrRandNum(ArrRandomNum) {
    let ArrayRandomNumbers = [];
    for (let item = 0; item < 5; item = item + 1) {
        ArrayRandomNumbers[item] = Math.floor(Math.random() * 10);
    }
    console.log("Random числа: ",ArrayRandomNumbers);
}
funcArrRandNum([]);

// створити функцію яка повертає найменше число з масиву. (Без Math.min!)
function funcNumMin(ArrNumbers) {
        let min = ArrNumbers[0];
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        if (ArrNumbers[item] < min) {
            min = ArrNumbers[item];
        }
    }
    console.log("Мінімальне число: ", min);
    return ArrNumbers;

}
funcNumMin([5,9,3,1,7]);

// створити функцію яка повертає найбільше число з масиву (Без Math.max!)
function funcNumMax (ArrNumbers) {
    let max = ArrNumbers[0];
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        if (ArrNumbers[item] > max) {
            max = ArrNumbers[item];
        }
    }
    console.log("Максимальне число: ", max);
    return ArrNumbers;
}
funcNumMax([2,5,1,8,9]);

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його
function funcNumSum (ArrNumbers) {
    let Sum = 0;
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        Sum = Sum+ArrNumbers[item];
    }
    console.log("Сума чисел: ", Sum);
    return ArrNumbers;
}
funcNumSum([2,5,1,8,9]);

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function funcNumAverage (ArrNumbers) {
    let Sum=0;
    let Average = 0;
    for (let item = 0; item < ArrNumbers.length; item = item + 1) {
        Sum= Sum+ArrNumbers[item];
        Average=Sum/ArrNumbers.length;
    }
    console.log("Середнє значення чисел: ", Average);
    return ArrNumbers;
}
funcNumAverage([2,5,1,8,9]);

//Створити функцію яка приймає масив будь яких об'єктів, та повертає масив значень всіх обєктів
 const arrObjects = [{name: "Vova", age: 17}, {car: null, model: undefined}, {skills: ['html', 'js']}];
 function getAllKeys(objectArray) {
     let allKeys = [];
     for (const object of objectArray) {
         const keysOfObject = Object.keys(object);
         for (const key of keysOfObject) {
             allKeys.push(key);
         }
     }
     return allKeys;
 }
 console.log(getAllKeys(arrObjects));