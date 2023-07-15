//preentrega2

class casillero{
    constructor(nombre,tamaño,precio,hora){
        this.nombre=nombre;
        this.tamaño=tamaño;
        this.precio=precio;
        this.tiempoHora=hora;
    }
    alquiler(){
        console.log(`el precio a pagar por ${this.tiempoHora} hora es ${this.precio} $`);
    }
}

class usuario{
    constructor(nombre,correo,contraseña){
        this.nombre=nombre;
        this.correo=correo;
        this.contraseña=contraseña;
    }
}
let usuarios=[];

let casilleroA=new casillero('casillero A','H,L,W - 15,45,30 cn',3,1);
let casilleroB=new casillero('casillero B','H,L,W - 20,45,40 cn',5,1);
let casilleroC=new casillero('casillero C','H,L,W - 40,45,40 cn',7,1);
let casilleroD=new casillero('casillero D','H,L,W - 80,45,45 cn',10,1);


let casilleroStock_A=[0,0,0,0,0,0,0];
let casilleroStock_B=[0,0,0,0,0];
let casilleroStock_C=[0,0,0];
let casilleroStock_D=[0,0,0];

let ingreso=parseInt(prompt('***************    Bienvenido al Servicio SMARTLOCKER    ***************\n**************************************************************************\n ingrese:\n1 Para registro de usuario\n2 Para alquilar casillero\n3 Para ver  casilleros disponibles\n4 Para agregar tiempo de alquiler\n5 Para cancelar y dar de baja\n6 Salir'));

function agregarUsuario(){
    let nombre=prompt('ingrese su nombre');
    let correo=prompt('ingrese su correo electronico');
    let contraseña=prompt('ingrese su contraseña');
    let nuevoUsuario=new usuario(nombre,correo,contraseña);
    usuarios.push(nuevoUsuario);
}

agregarUsuario();
console.log(usuarios);

