import MediaPlayer from "mediaplayer-lib";
import AutoPlay from "mediaplayer-lib/lib/plugins/AutoPlay";
import AutoPause from "mediaplayer-lib/lib/plugins/AutoPause";
import Ads from "mediaplayer-lib/lib/plugins/Ads";

const video = document.querySelector(".video");
const tooglePlay = document.querySelector("#btnPlay");
const toogleMute = document.querySelector("#btnMute");

const player = new MediaPlayer({
  video: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

tooglePlay.addEventListener("click", () => player.tooglePlay());
toogleMute.addEventListener("click", () => player.toogleMute());

/*
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./serviceWorker.js").catch((error) => {
    console.log(error.message);
  });
}
*/
