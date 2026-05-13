console.log("ATLAS cinematic landing page loaded");

const playButton = document.querySelector(".play-btn");
const previewButton = document.querySelector(".preview-btn");

if (playButton) {
  playButton.addEventListener("click", () => {
    alert("ATLAS is starting soon.");
  });
}

if (previewButton) {
  previewButton.addEventListener("click", () => {
    alert("Combat preview coming soon.");
  });
}

const cards = document.querySelectorAll(".class-card, .feature-bar article");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(18px)";
  card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

  observer.observe(card);
});

document.addEventListener("scroll", () => {
  cards.forEach(card => {
    if (card.classList.contains("show")) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
