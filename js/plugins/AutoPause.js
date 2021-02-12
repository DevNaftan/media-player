class AutoPause {
  constructor() {
    this.threshold = 0.25; // Valor del umbral visible para pausar la reproducción (25%).
    this.handleIntersection = this.handleIntersection.bind(this); // Cambia el contexto del this para el método, de observer a la clase AutoPause.
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this); // Cambia el contexto del this para el método, de addEventListener a la clase AutoPause.
  }

  run(player) {
    this.player = player;
    // Crea una nueva instancia de IntersectionObserver donde recibe la función para manejar las entradas y la configuración de la intersección.
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });
    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handleVisibilityChange); // Obtiene el estado de la visibilidad de la pestaña actual.
  }

  handleIntersection(entries) {
    // Recibe las entradas observadas de la reproducción.
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold; // Guarda el valor en la variable si cumple la condición, el ratio (porcentaje del elemento visible en el viewport) debe ser mayor o igual al valor del umbral.
    isVisible ? this.player.play() : this.player.pause();
  }

  handleVisibilityChange(event) {
    const isVisible = document.visibilityState === "visible"; // Guarda en la variable el estado si la pestaña es visible.
    isVisible ? this.player.play() : this.player.pause();
  }
}

export default AutoPause;
