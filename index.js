var mostrar = document.getElementById("cuadro");
var contador = document.getElementById("contador");
var contador1 = document.getElementById("contador1");
var contador2 = document.getElementById("contador2");



function hola() {
    limpiar();
    var multres = 0;
    var mulcin = 0;
    var doble = 0;
    var cantidad = document.getElementById("cantidad").value;
    for (var i = 1; i <= cantidad; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            mostrar.innerHTML += "<br> FizzBuzz";
            doble += 1;
        } else if (i % 3 == 0) {
            mostrar.innerHTML += "<br>Fizz";
            multres += 1;
        } else if (i % 5 == 0) {
            mostrar.innerHTML += "<br> Buzz";
            mulcin += 1;
        } else {
            mostrar.innerHTML += "<br>" + i;
        }

    }

    contador.innerHTML = multres;
    contador1.innerHTML = mulcin;
    contador2.innerHTML = doble;

}

function limpiar() {
    mostrar.innerHTML = "";
}