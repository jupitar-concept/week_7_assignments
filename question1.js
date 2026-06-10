// Question 1:Create Student Objects

const students = [
  {
    id: 1,
    name: "Seyi Makinde",
    age: 20,
    grades: [85, 92, 78],
  },
  {
    id: 2,
    name: "Babajide Sanwo-Olu",
    age: 21,
    grades: [88, 76, 90],
  },
  {
    id: 3,
    name: "Ademola Adeleke",
    age: 19,
    grades: [95, 89, 93],
  },
  {
    id: 4,
    name: "Dapo Abiodun",
    age: 22,
    grades: [70, 82, 75],
  },
  {
    id: 5,
    name: "Biodun Oyebanji",
    age: 20,
    grades: [91, 87, 84],
  },
  {
    id: 6,
    name: "Lucky Aiyedatiwa",
    age: 21,
    grades: [78, 85, 80],
  },
];

console.log(students);

//Question 2: Calculate Averages

function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return Number((total / grades.length).toFixed(2));
}

const studentsWithAverage = students.map((student) => {
  return {
    ...student,
    average: calculateAverage(student.grades),
  };
});

console.log(studentsWithAverage);

//QUESTION 3: Filter Passing Students
function getPassingStudents(students) {
  return students.filter((student) => student.average >= 60);
}

const passing = getPassingStudents(studentsWithAverage);

console.log(passing);
