import students from "../../School_Data/students_Data.js";

// Function to edit a student
export default function editStudent(
  selectedStudent = students[students.length - 1]
) {
  if (!selectedStudent) {
    console.error("No student selected for editing.");
    return;
  }

  // Get updated input from the user
  selectedStudent.classId = prompt("Enter class ID:", selectedStudent.classId);
  selectedStudent.name = prompt("Enter student name:", selectedStudent.name);
  selectedStudent.department = prompt(
    "Enter student department:",
    selectedStudent.department
  );

  // Update subjects and grades
  selectedStudent.subjects.programming = prompt(
    "Enter programming grade:",
    selectedStudent.subjects.programming
  );
  selectedStudent.subjects.webDevelopment = prompt(
    "Enter web development grade:",
    selectedStudent.subjects.webDevelopment
  );
  selectedStudent.subjects.databases = prompt(
    "Enter databases grade:",
    selectedStudent.subjects.databases
  );

  // Save the updated array to localStorage
  localStorage.setItem("students", JSON.stringify(students));

  console.log("Student edited successfully:", selectedStudent);
}
