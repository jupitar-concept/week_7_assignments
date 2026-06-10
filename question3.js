function getPassingStudents(students) {
  return students.filter((student) => student.average >= 60);
}

const passing = getPassingStudents(studentsWithAverage);

console.log(passing);
