/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
   */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 10,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  /*LISTO!*/
  perderVidas: function(x) {
    this.vidas = this.vidas - x;
    alert("Perdiste " + x + " vidas :( ")
  },

  mover: function(movX, movY) {
    var x = Jugador.x;
    var y = Jugador.y;
    Jugador.x = this.x + movX; // nueva posición en eje x
    Jugador.y = this.y + movY; // nueva posición en eje y

    if (x == Jugador.x && y > Jugador.y) {
      Jugador.sprite = 'imagenes/auto_rojo_arriba.png';
      Jugador.alto = 30;
      Jugador.ancho = 15;
    }
    if (x == Jugador.x && y < Jugador.y) {
      Jugador.sprite = 'imagenes/auto_rojo_abajo.png';
      Jugador.alto = 30;
      Jugador.ancho = 15;
    }
    if (y == Jugador.y && x > Jugador.x) {
      Jugador.sprite = 'imagenes/auto_rojo_izquierda.png';
      Jugador.alto = 15;
      Jugador.ancho = 30;
    }
    if (y == Jugador.y && x < Jugador.x) {
      Jugador.sprite = 'imagenes/auto_rojo_derecha.png';
      Jugador.alto = 15;
      Jugador.ancho = 30;
    }
  },

}
