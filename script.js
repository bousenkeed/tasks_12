// 1: Преобразование массива объектов: 
// Дан массив объектов пользователей с полями name и age. Используйте map, чтобы создать 
// массив строк в формате "Имя: Возраст".

const users = [
    { name: "Иван", age: 25 },
    { name: "Светлана", age: 34 },
    { name: "Петр", age: 45 },
    { name: "Ирина", age: 19 }
];
const stringArray = users.map(user => {
    const { name, age } = user;
    return `${name}: ${age}`;
});
console.log(stringArray);

// 2: Фильтрация массива чисел: Дан массив чисел. 
// Используйте filter, чтобы получить массив, содержащий только четные числа.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => !(num % 2));

// 3: Поиск объекта по значению: Дан массив объектов с товарами (имя и цена). 
// Используйте find, чтобы найти первый товар, цена которого превышает 1000.

const products = [
    { name: "Ноутбук", price: 50000 },
    { name: "Клавиатура", price: 1000 },
    { name: "Мышь", price: 500 },
    { name: "Монитор", price: 12000 },
];
const foundProduct = products.find(product => product.price > 1000);


// 4: Нахождение индекса объекта по атрибуту: Дан массив пользователей с уникальными ID. 
// Используйте findIndex, чтобы определить индекс пользователя с конкретным ID.

const users2 = [
    { id: 1, name: "Иван" },
    { id: 2, name: "Светлана" },
    { id: 3, name: "Петр" },
    { id: 4, name: "Ирина" },
];
const userIdToFind = 3;

const foundIndexOfUser = users2.findIndex(user => user.id === userIdToFind);

// 5: Перебор массива и вывод: Дан массив строк. Используйте forEach, чтобы вывести каждый 
// элемент в консоль.

const strings = ["JavaScript", "HTML", "CSS", "React", "Node.js"];

strings.forEach(el => console.log(el));

// 6: Проверка всех элементов массива: Дан массив чисел. Используйте every, чтобы проверить, 
// все ли числа положительные.

const numbers2 = [1, 23, 45, 68, 90, 12, 4];

console.log(numbers2.every(el => el > 0));

// 7: Создание нового массива на основе условий: Используйте map и filter вместе, чтобы 
// преобразовать массив чисел, умножив каждое число на 2, а затем отфильтровать числа, 
// которые меньше 10.

const numbers3 = [1, 4, 6, 8, 10];
const processedNumbers = numbers3
    .map(num => num * 2)
    .filter(num => num < 10);

// 8: Сортировка объектов по критерию: Используйте filter или find, чтобы отфильтровать 
// массив объектов по определенному критерию, например, всех пользователей старше 30 лет.

const users3 = [
    { name: "Иван", age: 25 },
    { name: "Светлана", age: 34 },
    { name: "Петр", age: 45 },
    { name: "Ирина", age: 19 },
];

const filteredArray = users3.filter(user => user.age > 30);

// 9: Агрегация данных: Дан массив объектов с информацией о продажах (продукт, количество). 
// Используйте forEach, чтобы подсчитать общее количество проданных товаров.

const sales = [
    { product: "Ноутбук", quantity: 4 },
    { product: "Мышь", quantity: 10 },
    { product: "Клавиатура", quantity: 5 },
    { product: "Монитор", quantity: 3 }
];
// Тут лучше подойдет метод reduce
const totalQuantity = sales.reduce((acc, product) => acc += product.quantity, 0);
console.log(totalQuantity);
// Но если надо forEach, то можно так
let totalQuantity2 = 0;
sales.forEach(product => {
    totalQuantity2 += product.quantity;
});

// 10: Удаление дубликатов из массива: Используйте filter и findIndex, чтобы удалить дубликаты
//  из массива строк.

const strings2 = ["JavaScript", "Python", "JavaScript", "Java", "Python", "Java", "C++"];

const newArr = strings2.filter((el, index, arr) => (arr.indexOf(el) === index));
// не знаю как тут findIndex использовать, получилось только новый массив без дубликатов

// 11: Проверка наличия элементов по условию: Используйте some и every, чтобы проверить, 
// содержит ли массив чисел хотя бы одно отрицательное значение и все ли значения четные. 
// (Почитайте про метод some)

const numbers4 = [2, 4, 2, 6, 8];
const hasNegative = numbers4.some(number => number < 0);
const allEven = numbers4.every(number => !(number % 2));
console.log(`Есть ли отрицательные числа: ${hasNegative}`);
console.log(`Все числа четные: ${allEven}`);

// 12: Создание массива уникальных значений: Используйте map и filter, чтобы создать массив 
// уникальных значений из массива с дубликатами.
const numbers5 = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 5];

const uniqueValues = numbers5.filter((el, index , arr) => {
    return arr.indexOf(el) === index;
});
console.log(uniqueValues);

// 13: Фильтрация массива по длине строк: Дан массив строк. Используйте filter, 
// чтобы получить только те строки, длина которых больше 5 символов.
const strings3 = ["Hello", "World", "JavaScript", "CSS", "HTML"];

const newStings = strings3.filter(el => el.length > 5);

// 14: Объединение методов для сложных задач: Используйте комбинацию map, filter, find, every, 
// чтобы решить сложную задачу, например, найти и вывести информацию о пользователях, 
// удовлетворяющих нескольким условиям.
// Предположим, у нас есть массив пользователей, и мы хотим найти пользователей 
// старше 25 лет, затем преобразовать их имена в верхний регистр и проверить, все ли 
// они имеют имя длиннее 4 символов.

const users4 = [
  { name: "Иван", age: 24 },
  { name: "Светлана", age: 32 },
  { name: "Петр", age: 29 },
  { name: "Ольга", age: 22 },
];
const selectedUsers = users4
  .filter(user => user.age > 25)
  .map(user => user.name.toUpperCase())
  .every(name => name.length > 5);

console.log(`Все выбранные пользователи имеют имена длиннее 4 символов: ${selectedUsers}`);