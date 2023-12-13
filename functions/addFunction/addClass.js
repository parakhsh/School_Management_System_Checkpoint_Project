import classes from "../../School_Data/classes_Data.js";

export default function addNewClass() {
  // Prompt to collect information for the new class
  const className = prompt("Enter the name of the new class:");
  const classId = parseInt(prompt("Enter the ID for the new class:"));
  const teacherIdsInput = prompt("Enter teacher IDs separated by commas:");

  // Convert the comma-separated teacher IDs to an array of integers
  const teacherIds = teacherIdsInput
    .split(",")
    .map((id) => parseInt(id.trim()));

  // Create a new class object
  const newClass = {
    id: classId,
    name: className,
    teacherIds: teacherIds,
  };

  // Push the new class to the classes array
  classes.push(newClass);

  // Save the updated classes array to localStorage
  localStorage.setItem("classes", JSON.stringify(classes));

  // Log the updated classes array
  console.log("Updated Classes Array:", classes);
}
