export default function generateClassContent() {
    // Retrieve classes data from local storage
    const storedData = localStorage.getItem('classes');
    let lastClassName = '';
    let oneBeforelastClassName = '';
  
    if (storedData) {
      const classes = JSON.parse(storedData);
  
      // Check if there are any classes in the array
      if (classes.length > 0) {
        // Get the last classes's name
        lastClassName = classes[classes.length - 1].name;
  
        // Check if there is more than one classes in the array
        if (classes.length > 1) {
          // Get the one before the last classes's name
          oneBeforelastClassName  = classes[classes.length - 2].name;
        }
      }
    }
    return`
  <h1 class="mb-5 ">Classes</h1>

  <div class="container mt-5">
  <div class="row">
      <div class="col-md-6">
          <div class="card mb-3">
              <div class="card-body">
              <div class="d-flex justify-content-end">
              <buttonclass="btn btn-custom " type="button" id="edit">
              <img src="./pictures/edit.png" alt="Add New Student" width="50" height="50"></button>
              
              <button class="btn btn-custom " type="buttonid="remove" ">
              <img src="./pictures/minus.png" alt="Add New Student" width="50" height="50">
              </button>
              </div>
                  <h5 class="card-title">${oneBeforelastClassName}</h5>
                  <p class="card-text">Fullstack</p>
                  
                  <!-- Add link for Teachers -->
                  <a href="#" class="card-link text-primary">Teachers</a>
                  <a href="#" class="card-link text-primary">Classes</a>
              </div>
          </div>
      </div>
      <div class="col-md-6">
          <div class="card mb-3">
              <div class="card-body">  
              <div class="d-flex justify-content-end">
              <button class="btn btn-custom " type="button" id="editClassButton">
              <img src="./pictures/edit.png" alt="Add New Student" width="50" height="50"></button>
              
              <button id="deleteClassButton" class="btn btn-custom " type="buttonid="remove" ">
              <img src="./pictures/minus.png" alt="Add New Student" width="50" height="50">
              </button>
              </div>
                  <h5 class="card-title">${lastClassName}</h5>
                  <p class="card-text">Cloud</p>
                 
                  <!-- Add link for Classes -->
                  <a href="#" class="card-link text-primary">Teachers</a>
                  <a href="#" class="card-link text-primary">Classes</a>
              </div>
          </div>
      </div>
  </div>
  <div class="text-center">
       <div class="d-grid gap-2 d-md justify-content-md-center">
          <!-- Circular button with custom image -->
          <button id="addClassButton" class="btn btn-custom " type="button">
          <img src="./pictures/add.png" alt="Add New class" width="50" height="50">
          </button>
          <p class="card-text">Add New Class</p>
  </div>
</div>

`;
  
}