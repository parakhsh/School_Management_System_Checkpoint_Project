import generateHomeContent from "./home.js";
import generateClassContent from "./classes.js";
import generateTeacherContent from "./teachers.js";
import generateStudentContent from "./students.js";
import addButton from "../functions/addBtn.js";
import deleteButton from "../functions/deleteBtn.js"
import editButton from "../functions/editBtn.js"


export function loadPage(pageName) {
  let contentFunction;

  switch (pageName) {
    case 'home':
      contentFunction = generateHomeContent;
      break;
    case 'class':
      contentFunction = generateClassContent;
      break;
    case 'teacher':
      contentFunction = generateTeacherContent;
      break;
    case 'student':
      contentFunction = generateStudentContent;
      break;
    default:
      contentFunction = null;
  }

  const contentContainer = document.getElementById('content-container');

  if (contentFunction && contentContainer) {
    contentContainer.innerHTML = contentFunction();
    addButton();
    deleteButton();
    editButton();
  
  }
   else {
    console.error("Element with id 'content-container' not found or content function not defined.");
  }
}

  



