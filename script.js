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

const pixelHeartsContainer = document.getElementById("pixelHearts");

function createPixelHeart() {
  const heart = document.createElement("div");
  const pixels = document.createElement("span");

  heart.classList.add("pixel-heart");
  heart.appendChild(pixels);

  heart.style.left = Math.random() * 95 + "vw";
  heart.style.top = Math.random() * 90 + "vh";
  heart.style.animationDelay = Math.random() * 5 + "s";
  heart.style.transform = `scale(${0.45 + Math.random() * 0.8})`;

  pixelHeartsContainer.appendChild(heart);
}

for (let i = 0; i < 18; i++) {
  createPixelHeart();
}