export default function generateTeacherContent() {
  // Retrieve teachers data from local storage
  const storedData = localStorage.getItem("teachers");
  let lastPersonName = "";
  let oneBeforeLastPersonName = "";

  if (storedData) {
    const teachers = JSON.parse(storedData);

    // Check if there are any teachers in the array
    if (teachers.length > 0) {
      // Get the last teachers's name
      lastPersonName = teachers[teachers.length - 1].name;

      // Check if there is more than one teachers in the array
      if (teachers.length > 1) {
        // Get the one before the last teachers's name
        oneBeforeLastPersonName = teachers[teachers.length - 2].name;
      }
    }
  }
  return `
      <h1 class="mb-5 ">Teachers</h1>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-end">
                  <button class="btn btn-custom" type="button" id="edit">
                    <img src="./pictures/edit.png" alt="Edit" width="50" height="50">
                  </button>
                  <button class="btn btn-custom" type="button" id="remove">
                    <img src="./pictures/minus.png" alt="Remove" width="50" height="50">
                  </button>
                </div>
                <h5 class="card-title">${oneBeforeLastPersonName}</h5>
                <p class="card-text">Fullstack</p>
                <!-- Add link for Teachers -->
                <a href="#"  id="" class="card-link text-primary">Students</a>
                <a href="#"  id="" class="card-link text-primary">Classes</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-end">
                  <button class="btn btn-custom" type="button" id="editTeacherButton">
                    <img src="./pictures/edit.png" alt="Edit" width="50" height="50">
                  </button>
                  <button id="deleteTeacherButton" class="btn btn-custom" type="button" >
                  <img src="./pictures/minus.png" alt="Remove" width="50" height="50">
                  </button>
                </div>
                <h5 class="card-title">${lastPersonName}</h5>
                <p class="card-text">Cloud</p>
                <!-- Add link for Classes -->
                <a href="#" class="card-link text-primary">Students</a>
                <a href="#" class="card-link text-primary">Classes</a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="d-grid gap-2 d-md justify-content-md-center">
            <!-- Circular button with custom image -->
            <button id="addteacherButton" class="btn btn-custom" type="button">
              <img src="./pictures/add.png" alt="Add New Student" width="50" height="50">
            </button>
            <p class="card-text">Add New Teacher</p>
          </div>
        </div>
      </div>

   
    `;
}
