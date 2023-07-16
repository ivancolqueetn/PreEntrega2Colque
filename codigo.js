//preentrega2

//creamos clase casillero el cual indica las caracteristicas del producto
class casillero{
    constructor(nombre,tamaño,precio,hora){
        this.nombre=nombre;
        this.tamaño=tamaño;
        this.precio=precio;
        this.tiempoHora=hora;
    }
    alquiler(){
        return `el precio a pagar por ${this.tiempoHora} hora es ${this.precio} $`;
    }
}

//creamos clase casillero el cual indica las caracteristicas del producto
class usuario{
    constructor(nombre,correo,contraseña){
        this.nombre=nombre;
        this.correo=correo;
        this.contraseña=contraseña;
    }
}
//array el cual guardara el registro de cada usuario en forma de objeto
let usuarios=[];
//array el cual guardara dato de usuario y casillero alquilado
let casilleroUsuario=[];

// creamos las caracteristicas de cada tipo de casillero
let casilleroA=new casillero('casillero A','HxLxW - 15x45x30 cn',3,1);
let casilleroB=new casillero('casillero B','HxLxW - 20x45x40 cn',5,1);
let casilleroC=new casillero('casillero C','HxLxW - 40x45x40 cn',7,1);
let casilleroD=new casillero('casillero D','HxLxw - 80x45x45 cn',10,1);





// creamos el espacio de casilleros disponibles, 0 = casillero libre y 1 = casillero ocupado
let casilleroStock_A=[0,0,0,0,0,0,0];
let casilleroStock_B=[0,0,0,0,0];
let casilleroStock_C=[0,0,0];
let casilleroStock_D=[0,0,0];

let ingreso=parseInt(prompt('***************    Bienvenido al Servicio SMARTLOCKER    ***************\n**************************************************************************\n ingrese:\n1 Para registro de usuario\n2 Para alquilar casillero\n3 Para ver  casilleros disponibles\n4 Para agregar tiempo de alquiler\n5 Para cancelar y dar de baja\n6 Salir'));

//funcion para registrar a los usuarios en un array de objetos usando el metodo push
function registroUsuario(){
    let nombre=prompt('ingrese su nombre');
    let correo=prompt('ingrese su correo electronico');
    let contraseña=prompt('ingrese su contraseña');
    let codigo=[];
    let nuevoUsuario=new usuario(nombre,correo,contraseña,codigo);
    usuarios.push(nuevoUsuario);
}

function alquilarCasillero(){
    let comprar=0;
    while(comprar===0){
        let seleccionCasillero=parseInt(prompt(`1 ${casilleroA.nombre}   (${casilleroA.tamaño}) ${casilleroA.precio}$xhora\n2 ${casilleroB.nombre}   (${casilleroB.tamaño}) ${casilleroB.precio}$xhora\n3 ${casilleroC.nombre}   (${casilleroC.tamaño}) ${casilleroC.precio}$xhora\n4 ${casilleroD.nombre}   (${casilleroD.tamaño}) ${casilleroD.precio}$xhora`));
        if(seleccionCasillero===1){
            let paquetes=parseInt(prompt('cuanto tiempo desea alquilar?\n1 1hora\n2 2horas\n3 5horas descuento del 2%\n4 12horas descuento del 3%\n5 1dia descuento del 5%\n6 3dias descuento del 8%\n7 1semana descuento del 10%\n8 1mes descuento del 13%\n9 1año descuento del 20%'));
            if (precioA===1){
                alert(`el precio a pagar es ${casilleroA.alquiler()}`)
            }else if(precio===2){

            }
            

        }

    }
    
}


