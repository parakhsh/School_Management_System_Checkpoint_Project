import classes from "../School_Data/classes_Data.js"
import students from "../School_Data/students_Data.js"
import teachers from "../School_Data/teachers_Data.js"

function countEl (elements){
 return elements.length;
}


const classCount = countEl(classes);
const teachersCount = countEl(teachers);
const studentsCount = countEl(students);


export {classCount, teachersCount, studentsCount}