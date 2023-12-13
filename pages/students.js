
export default function generateStudentContent() {
    // Retrieve students data from local storage
    const storedData = localStorage.getItem('students');
    let lastPersonName = '';
    let oneBeforeLastPersonName = '';
    
    if (storedData) {
      const students = JSON.parse(storedData);
  
      // Check if there are any students in the array
      if (students.length > 0) {
        // Get the last student's name
        lastPersonName = students[students.length - 1].name;
  
        // Check if there is more than one student in the array
        if (students.length > 1) {
          // Get the one before the last student's name
          oneBeforeLastPersonName = students[students.length - 2].name;
        }
      }
    }

  return `
  <h1 class="mb-5 ">Students</h1>

  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-end">
              <button class="btn btn-custom " type="button" id="edit">
                <img src="./pictures/edit.png" alt="Add New Student" width="50" height="50">
              </button>
              <button class="btn btn-custom " type="button" id="remove">
                <img src="./pictures/minus.png" alt="Add New Student" width="50" height="50">
              </button>
            </div>
            <h5 class="card-title">${oneBeforeLastPersonName}</h5>
            <p class="card-text" id="studentName">Fullstack</p>
            <p class="card-text text-primary" id="average" >Average Grade: 5.3 </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-end">
              <button class="btn btn-custom " type="button" id="editStudentButton">
                <img src="./pictures/edit.png" alt="edit Student" width="50" height="50">
              </button>
              <button id="deleteStudentButton" class="btn btn-custom " type="button">
                <img src="./pictures/minus.png" alt="delete Student" width="50" height="50">
              </button>
            </div>
            <h5 class="card-title">${lastPersonName}</h5>
            <p class="card-text">Cloud</p>
            <p class="card-text text-primary">Average Grade:</p>
            <!-- Add link for Classes -->
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <div class="d-grid gap-2 d-md justify-content-md-center">
        <button id="addStudentButton" class="btn btn-custom " type="button">
          <img src="./pictures/add.png" alt="Add New Student" width="50" height="50">
        </button>
        <p class="card-text">Add New Student</p>
      </div>
    </div>
  </div>
`;
}



