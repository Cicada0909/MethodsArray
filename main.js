//1. Создать массив имен студентов старше 21 года.
// Создать массив объектов, содержащих имена и средние оценки студентов.

const students = [
    { name: 'Алексей', age: 20, grades: { math: 85, physics: 78, chemistry: 92 } },
    { name: 'Мария', age: 22, grades: { math: 95, physics: 88, chemistry: 75 } },
    { name: 'Иван', age: 21, grades: { math: 70, physics: 65, chemistry: 80 } },
    { name: 'Ольга', age: 23, grades: { math: 85, physics: 92, chemistry: 89 } },
    { name: 'Дмитрий', age: 20, grades: { math: 60, physics: 72, chemistry: 68 } },
];

const studentsAge21 = students
    .filter(item => item.age >= 21)
    .map(item => item.name);
    

console.log(studentsAge21);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2. Найти студента с самой высокой средней оценкой (без использования .reduce()).

const studentsGrades = students.map(item => {
    const arrGrades = Object.values(item.grades);
    let sum = 0;
    for (const num of arrGrades) {
        sum += num;
    }

    const averageSum = sum / arrGrades.length;

    return {
        name: item.name,
        averageGrade: averageSum
    };
})

let highGrad = 0;
let highStudent = null;

const topStudent = studentsGrades.map(item => {
    if (item.averageGrade > highGrad) {
        highGrad = Math.round(item.averageGrade)
        highStudent = item.name
    }
})

console.log(`Студент с наивысшим средним баллом: ${highStudent} Средний балл: ${highGrad}`);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3. Вывести список студентов, у которых оценка по физике выше 80.

const studentsPhysics80 = students.filter(item => {
    if (item.grades.physics >= 80) {
        return item
    }
})

const studentsPhysics80Name = studentsPhysics80.map(item => {
    return item.name
})

console.log(studentsPhysics80Name);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Отфильтровать все книги, у которых количество страниц больше 300.
// Создать новый массив с названиями книг, у которых количество страниц больше 300.
// Для каждой книги посчитать, сколько страниц в среднем, если в библиотеке есть несколько книг.

const books = [
    { title: 'Война и мир', author: 'Лев Толстой', pages: 1225 },
    { title: '1984', author: 'Джордж Оруэлл', pages: 328 },
    { title: 'Маленький принц', author: 'Антуан де Сент-Экзюпери', pages: 96 },
    { title: 'Гарри Поттер и философский камень', author: 'Дж.К. Роулинг', pages: 309 },
    { title: 'Три товарища', author: 'Эрих Мария Ремарк', pages: 480 },
];

const books300 = books.filter(item => item.pages > 300).map(item => item.title);

console.log(books300);

let pagesSum = 0;

const pagesAverage = books.map(item => pagesSum += item.pages);

const booksPagesAverage = pagesSum / books.length;


console.log(booksPagesAverage);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Отфильтровать все фильмы, которые были выпущены после 2010 года.
// Создать новый массив, содержащий только названия фильмов, которые были выпущены после 2010 года.
// Для всех фильмов посчитать средний рейтинг.

const movies = [
    { title: 'Интерстеллар', year: 2014, rating: 8.6 },
    { title: 'Начало', year: 2010, rating: 8.8 },
    { title: 'Крепкий орешек', year: 1988, rating: 8.2 },
    { title: 'Гарри Поттер и Дары Смерти', year: 2011, rating: 8.1 },
    { title: 'Темный рыцарь', year: 2008, rating: 9.0 },
];

const movies2010 = movies.filter(item => item.year >= 2010).map(item => item.title);

let sumRating = 0;

const moviesRating = movies.map(item => sumRating += item.rating);

const averageRating = sumRating / movies.length;


console.log(movies2010);

console.log(averageRating);




