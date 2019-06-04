var ZombieConductorSube = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion, atacar) {

  ZombieConductor.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov, direccion, atacar);
}

ZombieConductorSube.prototype = Object.create(ZombieConductor.prototype);
ZombieConductorSube.prototype.constructor = ZombieConductorSube;


ZombieConductorSube.prototype.mover = function() {

  if ((this.y <= this.rangoMov.desdeY) && (this.y > this.rangoMov.hastaY)) {
    this.y -= this.velocidad;
    this.direccion = "asciende";
  } else {
    this.y = this.rangoMov.desdeY;
  }

}
