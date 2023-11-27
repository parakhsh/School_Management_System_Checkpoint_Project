import content from "./components/content/content-template.js"
import header from "./components/header/header-template.js"
import footer from "./components/footer/footer-template.js"
import { classCount, teachersCount, studentsCount} from "./functions/functions.js"


const myMmain = document.querySelector(".main-container")


myMmain.innerHTML= header()+ content()+ footer() 


console.log(studentsCount,teachersCount,classCount)
