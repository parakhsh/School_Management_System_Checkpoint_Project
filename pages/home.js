import {
  studentsCount,
  teachersCount,
  classCount,
} from "../../functions/functions.js";
export default function generateHomeContent() {
  return `
    <div class="container text-center mt-5" id="content-container">
    <h1 class="text mt-5 p-4">Welcome Mirjam</h1></br></br>
    <div class="row">
      <div class="col-md-4">
        <div class="card" style="height: 200px;">
          <div class="card-body p-5">
            <h5 class="card-title"> ${studentsCount}</h5>
            <p class="card-text">Number of Students</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="height: 200px;">
          <div class="card-body p-5">
            <h5 class="card-title">${teachersCount}</h5>
            <p class="card-text">Number of Teachers</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="height: 200px;">
          <div class="card-body p-5">
            <h5 class="card-title">${classCount}</h5>
            <p class="card-text">Number of Classes</p>
          </div>
        </div>
      </div>
    </div>

   
  `;
}
