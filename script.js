const openLetterButton = document.getElementById("openLetter");
const hero = document.getElementById("hero");
const letter = document.getElementById("letter");

const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openLetterButton.addEventListener("click", function () {
  hero.style.display = "none";
  letter.classList.remove("hidden");
  letter.classList.add("show-letter");
});

openModalButton.addEventListener("click", function () {
  modal.classList.add("show");
});

closeModalButton.addEventListener("click", function () {
  modal.classList.remove("show");
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.classList.remove("show");
  }
});