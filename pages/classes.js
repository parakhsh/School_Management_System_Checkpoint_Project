export default function generateClassContent() {
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
                  <h5 class="card-title">Max Hermann</h5>
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
                  <h5 class="card-title">Anthony Egbe</h5>
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

