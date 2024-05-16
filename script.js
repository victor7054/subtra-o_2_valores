let valor1 = document.querySelector("#valor1");
let pago = document.querySelector("#pago");
let troco = document.querySelector("#troco");
let btCalcular = document.querySelector("#btCalcular");

function moeda(){
    let resultado = Number (valor1.value) - Number (pago.value) 
    troco.value = resultado;
}

btCalcular.onclick = function(){
    moeda();
}