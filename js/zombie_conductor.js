/* Para insipirarte para la implementacion del ZombieConductor podes usar al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo: Enemigo.call(...) */
  /* Completar metodos para el movimiento y el ataque */
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  /* Completar creacion del ZombieConductor */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;


ZombieConductor.prototype.mover = function() {

  if ((this.x >= this.rangoMov.desdeX) && (this.x < this.rangoMov.hastaX)) {
    this.x += this.velocidad;
    this.direccion = "horizontal";
  } else {
    this.x = this.rangoMov.desdeX;
  }

  if ((this.y >= this.rangoMov.desdeY) && (this.y < this.rangoMov.hastaY)) {
    this.y += this.velocidad;
    this.direccion = "desciende";
  } else {
    this.y = this.rangoMov.desdeY;
  }
}

ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderVidas(jugador.vidas);

}
