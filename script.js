const logButton = document.getElementById("logWorkout");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("exerciseDialog");
const dialog2 = document.getElementById("repsAndWeightsDialog");
const nextButton = document.getElementById("next");

//dialog.returnValue = "favAnimal";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
logButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("notChosen");
  openCheck(dialog);
});


nextButton.addEventListener("click", ()=> {
    dialog2.showModal();
    openCheck(dialog2);
  });


  