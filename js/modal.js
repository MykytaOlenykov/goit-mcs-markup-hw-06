const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", openModal);
refs.closeModalBtn.addEventListener("click", closeModal);

function openModal() {
  document.body.style.overflow = "hidden";
  refs.modal.classList.remove("backdrop--is-hidden");
}

function closeModal() {
  refs.modal.classList.add("backdrop--is-hidden");
  document.body.style.overflow = "auto";
}

const formRef = document.querySelector("#form");

formRef.addEventListener("submit", (e) => {
  e.preventDefault();
  e.currentTarget.reset();
  closeModal();
});
