const modal = document.querySelector(".modal");
const playButton = document.querySelector(".play-button");
const videoPlayer = document.getElementById("videoPlayer");
const src =
  "https://www.youtube.com/embed/IfgiiEmyYt0?si=pPHZubb4Gh1QP018?&autoplay=1&mute=1";

playButton.addEventListener("click", () => {
  modal.style.display = "flex";
  videoPlayer.src = src;
  initializePlayer();
});

modal.addEventListener("click", (e) => {
  const id = e.target.id;
  if (!id) {
    modal.style.display = "none";
    stopVideo();
  }
});

function stopVideo() {
  videoPlayer.src = "";
}
