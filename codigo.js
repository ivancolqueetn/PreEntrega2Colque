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
  
  // Función para mostrar el menú del programa
  function mostrarMenu() {
    const menu = `----- Menú -----\n
  1. Agregar autobuses a la flota
  2. Asignar ruta a un autobús
  3. Subir pasajeros a un autobús
  4. Descargar pasajeros de un autobús
  5. Mostrar información de un autobús
  6. Salir`;
  
    alert(menu);
  }
  
  // Función principal del programa
  function main() {
    const flota = [];
    let opcion;
  
    do {
      mostrarMenu();
      opcion = parseInt(prompt("Seleccione una opción:"));
  
      switch (opcion) {
        case 1:
          const cantidadAutobuses = parseInt(prompt("Ingrese la cantidad de autobuses a agregar:"));
          const capacidadMaxima = parseInt(prompt("Ingrese la capacidad máxima de los autobuses:"));
          agregarAutobuses(cantidadAutobuses, capacidadMaxima, flota);
          break;
        case 2:
          const numeroAutobus = parseInt(prompt("Ingrese el número del autobús:"));
          const rutaAsignada = prompt("Ingrese la ruta a asignar:");
          const autobus = flota.find((bus) => bus.numero === numeroAutobus);
          if (autobus) {
            autobus.asignarRuta(rutaAsignada);
          } else {
            alert(`No se encontró el autobús con número ${numeroAutobus}.`);
          }
          break;
        case 3:
          const numeroAutobusSubir = parseInt(prompt("Ingrese el número del autobús:"));
          const cantidadPasajerosSubir = parseInt(prompt("Ingrese la cantidad de pasajeros a subir:"));
          const autobusSubir = flota.find((bus) => bus.numero === numeroAutobusSubir);
          if (autobusSubir) {
            autobusSubir.subirPasajeros(cantidadPasajerosSubir);
          } else {
            alert(`No se encontró el autobús con número ${numeroAutobusSubir}.`);
          }
          break;
        case 4:
          const numeroAutobusDescargar = parseInt(prompt("Ingrese el número del autobús:"));
          const cantidadPasajerosDescargar = parseInt(prompt("Ingrese la cantidad de pasajeros a descargar:"));
          const autobusDescargar = flota.find((bus) => bus.numero === numeroAutobusDescargar);
          if (autobusDescargar) {
            autobusDescargar.descargarPasajeros(cantidadPasajerosDescargar);
          } else {
            alert(`No se encontró el autobús con número ${numeroAutobusDescargar}.`);
          }
          break;
        case 5:
          const numeroAutobusInfo = parseInt(prompt("Ingrese el número del autobús:"));
          const autobusInfo = flota.find((bus) => bus.numero === numeroAutobusInfo);
          if (autobusInfo) {
            autobusInfo.obtenerInformacion();
          } else {
            alert(`No se encontró el autobús con número ${numeroAutobusInfo}.`);
          }
          break;
        case 6:
          alert("Gracias por utilizar el servicio de autobuses. ¡Hasta luego!");
          break;
        default:
          alert("Opción inválida. Por favor, ingrese una opción válida.");
      }
    } while (opcion !== 6);
  }
  
  // Ejecutar el programa
  main();c