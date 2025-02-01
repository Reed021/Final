const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const images = document.querySelectorAll('abtProfileIMG');
const images = document.querySelectorAll('interest-image-HZ');
const images = document.querySelectorAll('interest-image');

function openModal(imageSrc) {
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    openModal(img.src);
  });
});
