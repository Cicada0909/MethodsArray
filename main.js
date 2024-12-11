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



