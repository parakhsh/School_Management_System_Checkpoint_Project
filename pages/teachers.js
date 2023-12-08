import teachers from "../School_Data/teachers_Data";

export default function teachersContent() {
  return `
      <div class="container">
          <h1>Hello Teachers</h1>
          <p class="lead">Welcome to the Teachers Page. This is a simple paragraph styled with Bootstrap.</p>
      </div>
  `;
}




function loadPage(pageName) {
  // Specify the URL of the page
  const pageUrl = `./pages/${pageName}.html`;

  // Open the page in a new window
  window.open(pageUrl, '_blank');
}


loadPage(teachers)