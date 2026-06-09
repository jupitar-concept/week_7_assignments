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
