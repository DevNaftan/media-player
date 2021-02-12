import MediaPlayer from "./js/MediaPlayer.js";
import AutoPlay from "./js/plugins/AutoPlay.js";
import AutoPause from "./js/plugins/AutoPause.js";

const video = document.querySelector(".video");
const tooglePlay = document.querySelector("#btnPlay");
const toogleMute = document.querySelector("#btnMute");

const player = new MediaPlayer({
  video: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

tooglePlay.addEventListener("click", () => player.tooglePlay());
toogleMute.addEventListener("click", () => player.toogleMute());

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./serviceWorker.js").catch((error) => {
    console.log(error.message);
  });
}
