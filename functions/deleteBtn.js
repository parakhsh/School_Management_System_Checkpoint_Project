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
      console.error('delete button not found');
    }
  }







  // export default function deleteButton() {
  //   const deleteClassButton = document.getElementById('deleteClassButton');
  //   const deleteTeacherButton = document.getElementById('deleteTeacherButton');
  //   const deleteStudentButton = document.getElementById('deleteStudentButton');
  
  //   if (deleteClassButton) {
  //     deleteClassButton.addEventListener('click', function () {
  //       deleteItem('classes', 'class');
  //     });
  //   } else if (deleteTeacherButton) {
  //     deleteTeacherButton.addEventListener('click', function () {
  //       deleteItem('teachers', 'teacher');
  //     });
  //   } else if (deleteStudentButton) {
  //     deleteStudentButton.addEventListener('click', function () {
  //       deleteItem('students', 'student');
  //     });
  //   } else {
  //     console.error('delete button not found');
  //   }
  // }
  
  // function deleteItem(storageKey, itemKey) {
  //   const storedData = localStorage.getItem(storageKey);
  //   if (storedData) {
  //     let items = JSON.parse(storedData);
  
  //     // Identify the item to delete (you can implement your own logic)
  //     const itemIndex = findItemIndex(items, itemKey);
  
  //     if (itemIndex !== -1) {
  //       // Remove the item from the array
  //       items.splice(itemIndex, 1);
  
  //       // Update local storage
  //       localStorage.setItem(storageKey, JSON.stringify(items));
  
  //       console.log(`Deleted ${itemKey} successfully.`);
  //     } else {
  //       console.error(`${itemKey} not found in the array.`);
  //     }
  //   } else {
  //     console.error(`No data found for ${storageKey} in local storage.`);
  //   }
  // }
  
  // function findItemIndex(items, itemKey) {
  //   // Implement your own logic to find the index of the item to delete
  //   // For example, you might want to match based on an ID or other unique property
  //   // This function should return the index of the item or -1 if not found
  //   // Replace this with your own logic
  //   return items.findIndex(item => item.name === itemKey);
  // }