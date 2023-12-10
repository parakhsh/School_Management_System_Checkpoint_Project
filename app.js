import header from "./components/header/header-template.js";
import content from "./components/content/content-template.js";
import footer from "./components/footer/footer-template.js";

import { loadPage } from "./pages/loadPage.js";


const mainContainer = document.querySelector("#main-container");
mainContainer.innerHTML = header() + content() + footer();


function  handlePageChange(pEvent){
    pEvent.preventDefault();
    const nextPage = pEvent.target.dataset.pagename;
    loadPage(nextPage)
}

const anchorItems = document.querySelectorAll('.nav-item a')
Array.from(anchorItems).forEach((link)=> link.addEventListener("click", handlePageChange));
