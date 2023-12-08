export default function header_template() {
  return `

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LMS</a>
   
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" id="home-link" aria-current="page" href="./pages/home.js">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="classes-link" aria-current="page" onclick="loadPage('classes')">Classes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="teachers-link" aria-current="page" href="./pages/teachers.js" onclick="loadPage('teachers')">Teachers</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" id="students-link" aria-current="page" href="./pages/students.js"onclick="loadPage('students')">Students</a>
          </li>
        </ul>

        <picture class=w-10 h-10"">
        <img src="./pictures/person.png" class="custom-image rounded" alt="Person">
        <style>
        .custom-image {
         width: 50px; 
         height: auto; 
                      }
        </style>
        </picture>
        <div id="main-container"></div>
        </form>
      </div>
    </div>
  </nav>

`;
}
