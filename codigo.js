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

let casilleroA=new casillero('casillero A','H,L,W - 15,45,30 cn',3,1);
let casilleroB=new casillero('casillero B','H,L,W - 20,45,40 cn',5,1);
let casilleroC=new casillero('casillero C','H,L,W - 40,45,40 cn',7,1);
let casilleroD=new casillero('casillero D','H,L,W - 80,45,45 cn',10,1);


let casilleroStock_A=[0,0,0,0,0,0,0];
let casilleroStock_B=[0,0,0,0,0];
let casilleroStock_C=[0,0,0];
let casilleroStock_D=[0,0,0];

