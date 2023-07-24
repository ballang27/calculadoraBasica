let operador1;
let operador2;
let operacion;


function init() {
    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");

    //events
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operador1 = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operador1 = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operador1 = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operador1 = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operador2 = resultado.textContent;
        resolver()
    }

}
function limpiar(){
    resultado.textContent= "";
}
function resetear(){
    resultado.textContent= "";
    operador1=0;
    operador2=0;
    operacion="";
}
function resolver() {
    var res = 0;
    if (operacion === "+") {
        res = parseFloat(operador1) + parseFloat(operador2);
    } else if (operacion === "-") {
        res = parseFloat(operador1) - parseFloat(operador2);
    } else if (operacion === "*") {
      res = parseFloat(operador1) * parseFloat(operador2);
    } else if (operacion === "/") {
        if (parseFloat(operador2) === 0) {
        resultado.textContent = "Error: No es posible dividir entre cero.";
        return;
        }
        res = parseFloat(operador1) / parseFloat(operador2);
    } 
    resetear();
    resultado.textContent = res;
    }


