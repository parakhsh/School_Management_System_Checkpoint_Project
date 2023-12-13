export default function editButton() {
  const editClassButton = document.getElementById("editClassButton");
  const editTeacherButton = document.getElementById("editTeacherButton");
  const editStudentButton = document.getElementById("editStudentButton");

  if (editClassButton) {
    editClassButton.addEventListener("click", function () {
      console.log("edit Class button clicked");
    });
  } else if (editTeacherButton) {
    editTeacherButton.addEventListener("click", function () {
      console.log("edit techer button clicked");
    });
  } else if (editStudentButton) {
    editStudentButton.addEventListener("click", function () {
      console.log("edit student button clicked");
    });
  } else {
  }
}
