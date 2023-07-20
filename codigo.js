// //preentrega2

// Definición de la clase Autobus
class Autobus {
  constructor(numero, capacidadMaxima) {
    this.numero = numero;
    this.capacidadMaxima = capacidadMaxima;
    this.rutaAsignada = null;
    this.pasajeros = 0;
  }

  // Método para asignar una ruta al autobús
  asignarRuta(ruta) {
    this.rutaAsignada = ruta;
    alert(`El autobús ${this.numero} ha sido asignado a la ruta ${ruta}.`);
  }

  // Método para subir pasajeros al autobús
  subirPasajeros(cantidad) {
    if (this.pasajeros + cantidad <= this.capacidadMaxima) {
      this.pasajeros += cantidad;
      alert(`${cantidad} pasajeros han subido al autobús ${this.numero}.`);
    } else {
      alert(`El autobús ${this.numero} no puede llevar más pasajeros.`);
    }
  }

  // Método para descargar pasajeros del autobús
  descargarPasajeros(cantidad) {
    if (this.pasajeros >= cantidad) {
      this.pasajeros -= cantidad;
      alert(`${cantidad} pasajeros han descendido del autobús ${this.numero}.`);
    } else {
      alert(`El autobús ${this.numero} no tiene suficientes pasajeros.`);
    }
  }

  // Método para obtener la información del autobús
  obtenerInformacion() {
    const info = `Autobús ${this.numero}:
Ruta asignada: ${this.rutaAsignada}
Capacidad máxima: ${this.capacidadMaxima}
Pasajeros a bordo: ${this.pasajeros}`;
    alert(info);
  }
}

// Función de orden superior para agregar autobuses a la flota
function agregarAutobuses(cantidad, capacidadMaxima, flota) {
  for (let i = 1; i <= cantidad; i++) {
    const autobus = new Autobus(i, capacidadMaxima);
    flota.push(autobus);
  }
}