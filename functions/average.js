export default function calculateAverage(student) {
  const subjects = student.subjects;
  const totalGrade = Object.values(subjects).reduce(
    (sum, grade) => sum + parseFloat(grade),
    0
  );

  const averageGrade = totalGrade / Object.keys(subjects).length;
  return averageGrade.toFixed(2);
}

function displayLastTwoStudentAverages(students) {
  const lastStudent = students[students.length - 1];
  const secondLastStudent = students[students.length - 2];

  if (lastStudent) {
    const lastStudentAverage = calculateAverage(lastStudent);
    console.log(
      `Average Grade for Last Student (${lastStudent.name}): ${lastStudentAverage}`
    );
  }

  if (secondLastStudent) {
    const secondLastStudentAverage = calculateAverage(secondLastStudent);
    console.log(
      `Average Grade for Second Last Student (${secondLastStudent.name}): ${secondLastStudentAverage}`
    );
  }
}

// Retrieve student data from local storage
const storedStudents = localStorage.getItem("students");
const students = storedStudents ? JSON.parse(storedStudents) : [];

displayLastTwoStudentAverages(students);
