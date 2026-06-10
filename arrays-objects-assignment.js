// ___________________________________________________
// QUESTION 1: Create Student Objects
// ___________________________________________________

const students = [
  { id: 1, name: "Seyi Makinde", age: 20, grades: [85, 92, 78] },
  { id: 2, name: "Babajide Sanwo-Olu", age: 21, grades: [88, 76, 90] },
  { id: 3, name: "Ademola Adeleke", age: 19, grades: [65, 32, 40] },
  { id: 4, name: "Dapo Abiodun", age: 22, grades: [70, 82, 75] },
  { id: 5, name: "Biodun Oyebanji", age: 20, grades: [91, 87, 84] },
  { id: 6, name: "Lucky Aiyedatiwa", age: 21, grades: [35, 27, 78] },
];

// ___________________________________________________
// QUESTION 2: Calculate Averages
// ___________________________________________________

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

console.log("Students With Average:");
console.log(studentsWithAverage);

// ___________________________________________________
// QUESTION 3: Filter Passing Students
// ___________________________________________________
// Returns only students with average >= 60

function getPassingStudents(students) {
  return students.filter((student) => student.average >= 60);
}

const passingStudents = getPassingStudents(studentsWithAverage);

console.log("\nPassing Students:");
console.log(passingStudents);

// ___________________________________________________
// QUESTION 4: Functions & Callbacks
// ___________________________________________________
//Applies the callback to each student and returns the resulting array

// Applies a callback to each student
function processStudents(students, callback) {
  return students.map(callback);
}

// Adds letter grade based on average
function addLetterGrade(student) {
  let letterGrade;

  if (student.average >= 90) {
    letterGrade = "A";
  } else if (student.average >= 80) {
    letterGrade = "B";
  } else if (student.average >= 70) {
    letterGrade = "C";
  } else if (student.average >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return {
    ...student,
    letterGrade,
  };
}

// Adds Pass or Fail status
function addStatus(student) {
  return {
    ...student,
    status: student.average >= 60 ? "Pass" : "Fail",
  };
}

const studentsWithGrades = processStudents(studentsWithAverage, addLetterGrade);

console.log("\nStudents With Letter Grades:");
console.log(studentsWithGrades);

const studentsWithStatus = processStudents(studentsWithAverage, addStatus);

console.log("\nStudents With Status:");
console.log(studentsWithStatus);

// ___________________________________________________
// QUESTION 5: Find Studebt by ID
// ___________________________________________________

// Finds student by ID
function findStudentById(students, id) {
  const student = students.find((student) => student.id === id);

  return student || null;
}

console.log("\nFind Student With ID 3:");
console.log(findStudentById(studentsWithAverage, 3));

console.log("\nFind Student With ID 10:");
console.log(findStudentById(studentsWithAverage, 10));
