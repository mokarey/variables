 //CALCULADORA
 //debugger
 function calculo(){
    let numeroUno = parseInt(prompt ("ingrese el primer valor."))
    let numeroDos = parseInt(prompt ("ingrese el segundo valor."))
    let operacion = prompt ("Indique la operacion")
        console.log(hacerCalculo(numeroUno, numeroDos, operacion))
 }

 function hacerCalculo(num1, num2, operador){
    switch(operador){
        case "*":
            return num1 * num2
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "/":
            return num1 / num2
        default:
            return "Error. Vuelve a intentar."
    }
 }