const dialog = document.querySelector("dialog");
const openButton = document.querySelector(".add-button");
const cancelButton = document.querySelector("#cancel-button");
openButton.addEventListener("click", () => {
  dialog.showModal();
});
cancelButton.addEventListener("click", () => {
  dialog.close();
});
