console.log("ATLAS VERSION 3 loaded");

const playButton = document.querySelector(".play-btn");

if (playButton) {
  playButton.addEventListener("click", () => {
    alert("ATLAS is starting soon!");
  });
}
