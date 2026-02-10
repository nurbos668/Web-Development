// Работа с точностью и округлением
let price = 19.9945;

console.log("Округление вниз:", Math.floor(price)); // 19
console.log("Округление вверх:", Math.ceil(price));  // 20
console.log("До 2 знаков (строка):", price.toFixed(2)); // "19.99"

// Генерация случайного числа в диапазоне от 1 до 10
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Случайное число:", getRandomInt(1, 10));

// Проверка на число
console.log("Это число?", Number.isFinite(123)); // true
console.log("Это ошибка NaN?", Number.isNaN(NaN)); // true