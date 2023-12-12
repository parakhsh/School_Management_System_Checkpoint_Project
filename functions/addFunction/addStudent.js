import students from "../../School_Data/students_Data.js"


// Function to add a new student
export default function addNewStudent() {
    const newStudent = {};
  
    // Get input from the user
    newStudent.id = prompt("Enter student ID:");
    newStudent.classId = prompt("Enter class ID:");
    newStudent.name = prompt("Enter student name:");
    newStudent.department = prompt("Enter student department:");
  
    // Subjects object
    newStudent.subjects = {};
  
    // Get subjects and grades from the user
    newStudent.subjects.programming = prompt("Enter programming grade:");
    newStudent.subjects.webDevelopment = prompt("Enter web development grade:");
    newStudent.subjects.databases = prompt("Enter databases grade:");
  
    // Add the new student to the students array
    students.push(newStudent);
  
    // Save the updated array to localStorage
    localStorage.setItem('students', JSON.stringify(students));
  
    console.log("New student added successfully:", newStudent);
  }
  