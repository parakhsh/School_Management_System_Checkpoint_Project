import addNewClass from "./addFunction/addClass.js"
import addNewStudent from "./addFunction/addStudent.js"
import addNewTeacher from "./addFunction/addTeacher.js"

export default function addButton() {
    const addClassButton = document.getElementById('addClassButton');
    const addteacherButton = document.getElementById('addteacherButton');
    const addStudentButton = document.getElementById('addStudentButton');
    
  
    if (addClassButton) {
      addClassButton.addEventListener('click', function () {
        addNewClass();
        
      });
    } 
    else if (addteacherButton) {
      addteacherButton.addEventListener('click', function () {
        addNewTeacher();
     
      });
    } 
    else if (addStudentButton) {
      addStudentButton.addEventListener('click', function () {
        addNewStudent();
      
      });
    } 
    else {
      console.error('Add New button not found');
    }
  }




