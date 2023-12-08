import content from "./components/content/content-template.js";
import header from "./components/header/header-template.js";
import footer from "./components/footer/footer-template.js";
import { loadPage } from "./pages/loadPage.js";


const myMmain = document.querySelector(".main-container");
myMmain.innerHTML = header() + content() + footer();

document.getElementById("home-link").addEventListener("click", () => loadPage('home'));
document.getElementById("classes-link").addEventListener("click", () => loadPage('classes'));
document.getElementById("teachers-link").addEventListener("click", () => loadPage('teachers'));
document.getElementById("students-link").addEventListener("click", () => loadPage('students'));
