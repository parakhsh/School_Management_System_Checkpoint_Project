
// import homeTemplate from "./templates/home-template.js";
// import classesTemplate from "./templates/classes-template.js";
// import teachersTemplate from "./templates/teachers-template.js";
// import studentsTemplate from "./templates/students-template.js";

import header_template from "../components/header/header-template.js";

export function loadPage(pageName) {
    // Create a new window
    const newWindow = window.open('', '_blank');
  
    // Create a simple example content for each page
    let content;
    switch (pageName) {
      case 'home':
        content = header_template ()
        break;
      case 'classes':
        content = '<h2>Explore Classes Here</h2>';
        break;
      case 'teachers':
        content = '<h2>Meet Our Teachers</h2>';
        break;
      case 'students':
        content = '<h2>Meet Our Students</h2>';
        break;
      default:
        content = '<h2>Page not found</h2>';
    }
  
    // Set the content of the new window with the dynamically generated HTML
    newWindow.document.body.innerHTML = content;
  }