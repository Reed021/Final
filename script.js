const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const images = document.querySelectorAll('.fade-border');

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

        // Add event listeners for hover
images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.borderColor = 'black'; // Fade in black border
    });

    image.addEventListener('mouseleave', () => {
        image.style.borderColor = 'transparent'; // Fade out to transparent
    });
});
