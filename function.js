//створити функцію яка приймає масив та виводить його
function funcArrCars() {
    let ArrayRandomNumbers = ["fiat", "toyota", "peugeot", "citroen", "nissan"];
    for (let item = 0; item < 5; item = item + 1) {
        console.log(ArrayRandomNumbers[item]);
    }
}
funcArrCars();

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function funcArr() {
    let ArrayRandomNumbers = [];
    for (let item = 0; item < 5; item = item + 1) {
        ArrayRandomNumbers[item] = Math.floor(Math.random() * 10);
        console.log(ArrayRandomNumbers[item]);
    }
}
funcArr();

