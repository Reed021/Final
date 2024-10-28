// Greeting
const greetingContainer = document.getElementById("greeting-container");
const currentHour = new Date().getHours();

let greetingMessage;
if (currentHour < 12) {
  greetingMessage = "Good Morning!";
} else if (currentHour < 18) {
  greetingMessage = "Good Afternoon!";
} else {
  greetingMessage = "Good Evening!";
}
greetingContainer.innerText = greetingMessage;

// Secrect Button 
const SecretBtn = document.getElementById("SecretBtn");
const extraContent = document.getElementById("extraContent");

SecretMoreBtn.addEventListener("click", () => {
  extraContent.style.display = extraContent.style.display === "none" ? "block" : "none";
  SecretBtn.innerText = extraContent.style.display === "block" ? "Show Less" : "DO NOT PRESS";
});

//Image Transitions and Zoom
const profileImage = document.querySelector(".profile-image");

profileImage.addEventListener("mouseenter", () => {
  profileImage.style.border = "5px solid #2a9d8f";
});

profileImage.addEventListener("mouseleave", () => {
  profileImage.style.border = "none";
});

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

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