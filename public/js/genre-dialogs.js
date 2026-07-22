const addDialog = document.querySelector("#add-dialog");
const openButton = document.querySelector(".open-add-dialog-button");
const cancelAddDialogButton = document.querySelector(
  "#add-dialog .cancel-button",
);

const editDialog = document.querySelector("#edit-dialog");
const editButtons = document.querySelectorAll(".edit-button");
const cancelEditDialogButton = document.querySelector(
  "#edit-dialog .cancel-button",
);
const editDialogNameInput = document.querySelector(
  '#edit-dialog input[name="name"]',
);
const editForm = document.querySelector("#edit-dialog form");

openButton.addEventListener("click", () => {
  addDialog.showModal();
});
cancelAddDialogButton.addEventListener("click", () => {
  addDialog.close();
});

editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    editDialogNameInput.value = button.dataset.name;
    editForm.action = `/genres/${button.dataset.id}/edit`;
    editDialog.showModal();
  });
});

cancelEditDialogButton.addEventListener("click", () => {
  editDialog.close();
});
