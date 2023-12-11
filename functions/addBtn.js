export default function addButton() {
    const addClassButton = document.getElementById('addClassButton');
    const addteacherButton = document.getElementById('addteacherButton');
    const addStudentButton = document.getElementById('addStudentButton');
    
  
    if (addClassButton) {
      addClassButton.addEventListener('click', function () {
        console.log('Add New Class button clicked');
        
      });
    } 
    else if (addteacherButton) {
      addteacherButton.addEventListener('click', function () {
        console.log('Add New techer button clicked');
     
      });
    } 
    else if (addStudentButton) {
      addStudentButton.addEventListener('click', function () {
        console.log('Add New student button clicked');
      
      });
    } 
    else {
      console.error('Add New Class button not found');
    }
  }


