export default function editButton() {
    const editClassButton = document.getElementById('editClassButton');
    const editTeacherButton = document.getElementById('editTeacherButton');
    const editStudentButton = document.getElementById('editStudentButton');
    
  
    if (editClassButton) {
        editClassButton.addEventListener('click', function () {
        console.log('edit Class button clicked');
        
      });
    } 
    else if (editTeacherButton) {
        editTeacherButton.addEventListener('click', function () {
        console.log('edit techer button clicked');
     
      });
    } 
    else if (editStudentButton) {
        editStudentButton.addEventListener('click', function () {
          console.log('edit student button clicked');
      
      });
    } 
    else {
      console.error('edit button not found');
    }
  }


//  function editStudent(studentName) {
   
//     const storedData = localStorage.getItem('students');
  
//     if (storedData) {
//       let students = JSON.parse(storedData);
  

//       const indexToEdit = students.findIndex(student => student.name === studentName);
  
//       if (indexToEdit !== -1) {
//         const editedStudent = prompt(`Edit data for ${studentName}:`, JSON.stringify(students[indexToEdit]));
  
//         if (editedStudent) {
      
//           const parsedEditedStudent = JSON.parse(editedStudent);
  
//           students[indexToEdit] = {
//             ...students[indexToEdit],  
//             ...parsedEditedStudent    
//           };
  
          
//           localStorage.setItem('students', JSON.stringify(students));
  
//           console.log(`Edited data for ${studentName} successfully.`);
  
         
//         } else {
//           console.log('Editing canceled.');
//         }
//       } else {
//         console.error(`Student ${studentName} not found in the array.`);
//       }
//     } else {
//       console.error('No data found for students in local storage.');
//     }
//   }


//   const editLastStudentButton = document.getElementById('editStudentButton');
// if (editLastStudentButton) {
//   editLastStudentButton.addEventListener('click', function () {
//     // Find the last student in the students array
//     const lastStudent = students[students.length - 1];

//     // Call the editStudent function with the last student object
//     editStudent(lastStudent);
//   });
// }