/* unsuccessful attempt to create and invoke first dialog box

// Opens dialog box
function openDialog() {
    const dialogContent = 
    

    `
    <div class="dialog">
        <h2>What training did you do today?</h2>
        <form id="workoutForm">
            <label for="exercise">Exercise:</label>
            <input type="text" id="exercise" name="exercise" required>

            <!-- Add more input fields for sets, reps, weight, etc. -->

            <button type="submit">Submit</button>
        </form>
    </div>
    `
    //Inserts the dialog content into the dialog container
    document.getElementById("dialogContainer").innerHTML = dialogContent;
};

//HTMLDialogElement.sh

// Opens the dialog box for user interaction
document.getElementById("openDialogButton").addEventListener("click", openDialog);

*/

const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
dialog.returnValue = "favAnimal";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});