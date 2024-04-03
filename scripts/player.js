const player = document.querySelector(".player");
const playButton = document.querySelector(".play-button");
const videoPlayer = document.getElementById("videoPlayer");
const src =
  "https://www.youtube.com/embed/IfgiiEmyYt0?si=pPHZubb4Gh1QP018?&autoplay=1&mute=1";

// Play video
playButton.addEventListener("click", () => {
  player.style.display = "flex";
  videoPlayer.src = src;
});

player.addEventListener("click", (e) => {
  const id = e.target.id;
  if (!id) {
    player.style.display = "none";
    stopVideo();
  }
});

function stopVideo() {
  videoPlayer.src = "";
}
