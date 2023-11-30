export default function header_template() {
  return `

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LMS</a>
   
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Classes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Teachers</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Students</a>
          </li>
        </ul>
        <picture>
          <source srcset="..." type="image/svg+xml">
          <img src="./pictures/person.png" class="rounded" alt="...">
        </picture>
        </form>
      </div>
    </div>
  </nav>

`;
}

