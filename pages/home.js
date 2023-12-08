// home.js

import headerTemplate from "./components/header/header-template.js";
import footerTemplate from "./components/footer/footer-template.js";
import { loadPage } from "./loadPage.js";



export default function homePage(){
  const myMain = document.querySelector(".main-container");

// Set initial content
myMain.innerHTML = headerTemplate() + '<h2>Welcome to the Home Page</h2>' + footerTemplate();

}


// Add event listeners to navigation links
document.getElementById("home-link").addEventListener("click", () => loadPage('home'));
document.getElementById("classes-link").addEventListener("click", () => loadPage('classes'));
document.getElementById("teachers-link").addEventListener("click", () => loadPage('teachers'));
document.getElementById("students-link").addEventListener("click", () => loadPage('students'));

// ... other code
