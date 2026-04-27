const modal = document.getElementById("modal");

function openModal() {
  if (!modal) return;
  modal.style.display = "flex";
}

function closeModal() {
  if (!modal) return;
  modal.style.display = "none";
}


modal.addEventListener("click", function (e) {

  if (e.target === modal) {
    closeModal();
  }
});
