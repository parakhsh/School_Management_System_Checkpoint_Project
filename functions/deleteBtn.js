export default function deleteButton() {
    const deleteClassButton = document.getElementById('deleteClassButton');
    const deleteTeacherButton = document.getElementById('deleteTeacherButton');
    const deleteStudentButton = document.getElementById('deleteStudentButton');
    
  
    if (deleteClassButton) {
      deleteClassButton.addEventListener('click', function () {
        console.log('delete Class button clicked');
        
      });
    } 
    else if (deleteTeacherButton) {
      deleteTeacherButton.addEventListener('click', function () {
        console.log('delete techer button clicked');
     
      });
    } 
    else if (deleteStudentButton) {
      deleteStudentButton.addEventListener('click', function () {
        console.log('delete student button clicked');
      
      });
    } 
    else {
      console.error('Add New Class button not found');
    }
  }