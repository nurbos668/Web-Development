// Задача: Заменить все символы в строке на '*', кроме пробелов
const secretMessage = "JavaScript is awesome";

// Способ 1: Через массив и метод map
const masked = secretMessage
    .split("") // разбиваем строку на массив символов
    .map(char => (char === " " ? " " : "*")) // если не пробел, меняем на *
    .join(""); // собираем обратно в строку

console.log("Original:", secretMessage);
console.log("Masked:", masked); // "********** ** *******"

// Способ 2: Быстрая замена всех букв 'a' на '@'
const emailPart = "contact-admin-area";
const fixedEmail = emailPart.replaceAll("a", "@");
console.log("Fixed:", fixedEmail);