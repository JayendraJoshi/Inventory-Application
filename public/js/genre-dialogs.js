const addDialog = document.querySelector("#add-dialog");
const openButton = document.querySelector(".open-add-dialog-button");
const cancelAddDialogButton = document.querySelector(
  "#add-dialog .cancel-button",
);
const addDialogForm = document.querySelector("#add-dialog form");

const editDialog = document.querySelector("#edit-dialog");
const editButtons = document.querySelectorAll(".edit-button");
const cancelEditDialogButton = document.querySelector(
  "#edit-dialog .cancel-button",
);
const editDialogNameInput = document.querySelector(
  '#edit-dialog input[name="name"]',
);
const editForm = document.querySelector("#edit-dialog form");

//Handle visibility of addDialog
openButton.addEventListener("click", () => {
  addDialog.showModal();
});
cancelAddDialogButton.addEventListener("click", () => {
  addDialog.close();
});

// Handle visibility of editDialog
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

//Handle addDialog form submission
addDialogForm.addEventListener("submit", async (e) => {
  const errorElement = document.querySelector("#error-message");
  errorElement.textContent = "";
  e.preventDefault();
  const formData = new FormData(addDialogForm);

  const response = await fetch(addDialogForm.action, {
    method: addDialogForm.method,
    body: new URLSearchParams(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    errorElement.replaceChildren(
      ...data.errors.map((error) => {
        const p = document.createElement("p");
        p.textContent = error.msg;
        return p;
      }),
    );
    return;
  }
  addDialog.close();
  window.location.reload();
});
