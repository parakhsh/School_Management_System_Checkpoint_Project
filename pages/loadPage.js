import generateHomeContent from "./home.js"
import generateClassContent from "./classes.js"
import generateTeacherContent from "./teachers.js"
import generateStudentContent from "./students.js"


export function loadPage(pageName) {
    // Create a simple example content for each page
    let content;
    let contentFunction;
    switch (pageName) {
      case 'home':
        contentFunction = generateHomeContent;
        break;
      case 'class':
          // getRendederClassPAge
          contentFunction = generateClassContent;
        break;
      case 'teacher':
          // getdata
          contentFunction = generateTeacherContent;
        break;
      case 'student':
          // getdata
          contentFunction = generateStudentContent;
        break;
      default:
        content = '<h2>Page not found</h2>';
    }
  
    // // Set the content of the new window with the dynamically generated HTML
    // const contentContainer = document.querySelector('#content-container');
    // contentContainer.innerHTML = content;
    const contentContainer = document.querySelector('#content-container');
    if (contentFunction && contentContainer) {
      contentContainer.innerHTML = contentFunction();
    } else {
      console.error("Element with id 'content-container' not found or content function not defined.");
    }
  }
  
  