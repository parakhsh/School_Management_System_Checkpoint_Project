// import addNewClass from "./addFunction/addClass.js"
// import addNewStudent from "./addFunction/addStudent.js"
// import addNewTeacher from "./addFunction/addTeacher.js"

// export default function addButton() {
//     const addClassButton = document.getElementById('addClassButton');
//     const addteacherButton = document.getElementById('addteacherButton');
//     const addStudentButton = document.getElementById('addStudentButton');
    
  
//     if (addClassButton) {
//       addClassButton.addEventListener('click', function () {
//         addNewClass();
        
//       });
//     } 
//     else if (addteacherButton) {
//       addteacherButton.addEventListener('click', function () {
//         addNewTeacher();
     
//       });
//     } 
//     else if (addStudentButton) {
//       addStudentButton.addEventListener('click', function () {
//         addNewStudent();
      
//       });
//     } 
//     else {
//       console.error('Add New Class button not found');
//     }
//   }


  function AverageFromLocalStorage(key) {
    const storedData = localStorage.getItem(key);
  
    if (storedData) {
      const elements = JSON.parse(storedData);
      return elements.length;
    } else {
      return 0;
    }
  }

  const studentsAverage = AverageFromLocalStorage('students');
  
  export { studentsAverage };