const addDialog = document.querySelector("#add-dialog");
const openButton = document.querySelector(".open-add-dialog-button");
const cancelAddDialogButton = document.querySelector(
  "#add-dialog .cancel-button",
);
const addForm = document.querySelector("#add-dialog form");

const editDialog = document.querySelector("#edit-dialog");
const editButtons = document.querySelectorAll(".edit-button");
const cancelEditDialogButton = document.querySelector(
  "#edit-dialog .cancel-button",
);
const editDialogNameInput = document.querySelector(
  '#edit-dialog input[name="name"]',
);
const editDialogDescriptionTextarea = document.querySelector(
  '#edit-dialog textarea[name="description"]',
);
const editDialogImgInput = document.querySelector(
  "#edit-dialog input[name=img_url",
);
const editForm = document.querySelector("#edit-dialog form");

//Handle visibility of addDialog
openButton.addEventListener("click", () => {
  addDialog.showModal();
});
cancelAddDialogButton.addEventListener("click", () => {
  addDialog.close();
});

//Handle visibility of editDialog
editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    editDialogNameInput.value = button.dataset.name;
    editDialogDescriptionTextarea.value = button.dataset.description;
    editForm.action = `/studios/${button.dataset.id}/edit`;
    editDialogImgInput.value = button.dataset.imgUrl;
    editDialog.showModal();
  });
});
cancelEditDialogButton.addEventListener("click", () => {
  editDialog.close();
});

editForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const errorElement = document.querySelector("#edit-dialog .error-message");
  errorElement.textContent = "";
  const formData = new FormData(editForm);
  const response = await fetch(editForm.action, {
    method: editForm.method,
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
  editDialog.close();
  window.location.reload();
});

addForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const errorElement = document.querySelector("#add-dialog .error-message");
  errorElement.textContent = "";
  const formData = new FormData(addForm);
  const response = await fetch(addForm.action, {
    method: addForm.method,
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
