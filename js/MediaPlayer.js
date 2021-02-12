class MediaPlayer {
  constructor(elements) {
    this.media = elements.video;
    this.plugins = elements.plugins || [];
    this.initPlugins();
  }
  initPlugins() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      },
    };
    this.plugins.forEach((plugin) => {
      plugin.run(player);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  tooglePlay() {
    this.media.paused ? this.play() : this.pause();
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toogleMute() {
    this.media.muted ? this.unmute() : this.mute();
  }
}

export default MediaPlayer;
