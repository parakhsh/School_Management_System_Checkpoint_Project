import content from "./components/content/content-template.js";
import header from "./components/header/header-template.js";
import footer from "./components/footer/footer-template.js";



// function loadComponent(component) {
//   const mainContainer = document.querySelector("#main-container");
//   mainContainer.innerHTML = component.render();
// }

const myMmain = document.querySelector(".main-container");
myMmain.innerHTML = header() + content() + footer();


loadComponent(ClassesComponent);




// import HomeComponent from "./pages/home.js";
// import ClassesComponent from "./pages/classes.js";

// const myMain = document.getElementById("main-container");

// // Initial page load
// loadComponent(HomeComponent);

// // Navigation event listeners
// document.getElementById("home-link").addEventListener("click", function(event) {
//   event.preventDefault();
//   loadComponent(HomeComponent);
// });

// document.getElementById("classes-link").addEventListener("click", function(event) {
//   event.preventDefault();
//   loadComponent(ClassesComponent);
// });

// function loadComponent(component) {
//   myMain.innerHTML = component.render();
// }
