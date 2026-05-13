const atlasRevealItems = document.querySelectorAll(
  ".atlas-mini-card, .atlas-feature-card, .atlas-copy"
);

atlasRevealItems.forEach((item) => {
  item.classList.add("atlas-reveal");
});

const atlasObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

atlasRevealItems.forEach((item) => {
  atlasObserver.observe(item);
});

/* smooth scroll button */
const atlasScrollButtons = document.querySelectorAll("[data-scroll]");

atlasScrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* simple parallax */
const atlasParallaxItems = document.querySelectorAll("[data-depth]");

window.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 2;
  const y = (event.clientY / window.innerHeight - 0.5) * 2;

  atlasParallaxItems.forEach((item) => {
    const depth = Number(item.dataset.depth) || 0;
    const moveX = x * depth;
    const moveY = y * depth;

    item.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

window.addEventListener("mouseleave", () => {
  atlasParallaxItems.forEach((item) => {
    item.style.transform = "translate(0, 0)";
  });
});
