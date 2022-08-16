//-----INICIO--
let edad = parseInt(prompt("Ingresar la edad para continuar"));

if (edad > 17) {
    alert("Eres mayor de edad! Bienvenido.");
}
else {
alert("No eres mayor de edad.")
}


let monto = parseInt(prompt("Ingrese la cantidad deseada"))
for (let i = 1; i < monto; i++){
    console.log ("Primera", i)
}


//-----CLASES--
class Caballo{ 
        constructor(nombre, color, numero){
                this.nombre = nombre
                this.color = color
                this.numero = numero}
}

const cab1 = new Caballo("Galio", "Negro", 17)
const cab2 = new Caballo("Titan", "Gris", 11)
const cab3 = new Caballo("Book", "Beige", 8)
const cab4 = new Caballo("Paco", "Blanco", 21)

//-----ARRAYS--
const caballos = ['Galio', 'Titan', 'Book', 'Paco']
const colores = ['Negro', 'Gris', 'Beige', 'Blanco']
const numeros = ['17', '11', '8', '21']

//-----FUNCIONES--
function mostrarCompetidores(){
        for(let i = 0; i < 4; i++){
                console.log(caballos[i])
        }
}

function mostrarColores(){
        for(let i = 0; i < 4; i++){
                console.log(colores[i])
        }
}

function mostrarNumeros(){
        for(let i = 0; i < 4; i++){
                console.log(numeros[i])
        }
}

function agregarCompetidor (){
        let nuevoCompetidor = prompt ("Ingrese a su competidor.")
                caballos.push(nuevoCompetidor)
}

function agregarColor (){
        let nuevoColor = prompt ("Ingrese el color de su competidor.")
                colores.push(nuevoColor)
    }

function agregarNumero (){
        let nuevoNumero = parseInt(prompt ("Ingrese el numero de su competidor."))
                numeros.push(nuevoNumero)
    }
//-----