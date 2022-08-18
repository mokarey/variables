//-----INICIO--
//



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
const numero = ['1', '2', '3', '4']

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
//-----DOM
function listarCaballos(){
        const lista = document.getElementById("lista")
        caballos.forEach(caballo => {
                const  li = document.createElement("li")
                li.innerText = caballo
                lista.append(li)
        })
}
listarCaballos()

function lista1(){
        const listar = document.getElementById("listar")
        numero.forEach(num => {
                const  option = document.createElement("option")
                option.innerText = num
                listar.append(option)
        })
}
lista1()
//-----EVENTOS

const lista2 = document.querySelector(".btn")

lista2.addEventListener("click", ()=>{
        console.log("Elegir favorito")})





//-----