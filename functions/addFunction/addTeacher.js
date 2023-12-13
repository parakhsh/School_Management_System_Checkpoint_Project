import teachers from "../../School_Data/teachers_Data.js";

export default function addNewTeacher() {
  // Prompt to collect information for the new teacher
  const teacherId = parseInt(prompt("Enter the ID for the new Teacher:"));
  const teacherName = prompt("Enter the name of the new Teacher:");
  const teacherDepartment = prompt("Enter the name of the department:");
  const teacherSubject = prompt("Enter teacher Subject:");

  // Create a new teacher object
  const newTeacher = {
    id: teacherId,
    name: teacherName,
    department: teacherDepartment,
    subject: teacherSubject,
  };

  // Push the new teacher to the teachers array
  teachers.push(newTeacher);

  // Save the updated teacher array to localStorage
  localStorage.setItem("teachers", JSON.stringify(teachers));

  // Log the updated teacher array
  console.log("Updated teachers Array:", teachers);
}