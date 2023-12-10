export default function generateStudentContent() {
    return `
    <h1 class="mb-5 ">Student</h1>

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
                    <p class="card-text text-primary">Average Grade: 5.4</p>
                    <!-- Add link for Teachers -->
                    
                </div>
            </div>
        </div>
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
                    <h5 class="card-title">Anthony Egbe</h5>
                    <p class="card-text">Cloud</p>
                    <p class="card-text text-primary">Average Grade: 4.9</p>
                    <!-- Add link for Classes -->
                   
                </div>
            </div>
        </div>
    </div>
    <div class="text-center">
         <div class="d-grid gap-2 d-md justify-content-md-center">
            <!-- Circular button with custom image -->
            <button class="btn btn-custom " type="button">
            <img src="./pictures/add.png" alt="Add New Student" width="50" height="50">
            </button>
            <p class="card-text">Add New Student</p>
    </div>
</div>

  `;
}