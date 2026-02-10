const users = ["Alex", "Maria", "Ivan", "Elena", "Dmitry"];

// 1. Добавление и удаление
users.push("Olga"); // в конец
users.shift();      // удалит первого (Alex)

// 2. Поиск
if (users.includes("Maria")) {
    console.log("Мария найдена в списке!");
}

// 3. Трансформация (создаем массив длин имен)
const nameLengths = users.map(name => name.length);
console.log("Длины имен:", nameLengths);

// 4. Фильтрация (оставляем имена длиннее 4 символов)
const longNames = users.filter(name => name.length > 4);
console.log("Длинные имена:", longNames);

// 5. Сборка строки
console.log("Список группы:", users.join(", "));