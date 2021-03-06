var rep = true; //inicializacion variable para ingreso de punto
var oper = ""; //incializacion variable para escoger operacion aritmetica
var num = 0; // inicializacion variable para almacenar primer operando de la operacion matematica
var numaux1 = 0;
var numaux2 = 0;
var numresp = 0;
var segoper =  true;
var final = true;
var aux= 0;

//Eventos on click
document.getElementById(0).onmousedown = function () {presion(this.id)};
document.getElementById(1).onmousedown = function () {presion(this.id)};
document.getElementById(2).onmousedown = function () {presion(this.id)};
document.getElementById(3).onmousedown = function () {presion(this.id)};
document.getElementById(4).onmousedown = function () {presion(this.id)};
document.getElementById(5).onmousedown = function () {presion(this.id)};
document.getElementById(6).onmousedown = function () {presion(this.id)};
document.getElementById(7).onmousedown = function () {presion(this.id)};
document.getElementById(8).onmousedown = function () {presion(this.id)};
document.getElementById(9).onmousedown = function () {presion(this.id)};
document.getElementById("punto").onmousedown = function () {presion(this.id)};
document.getElementById("on").onmousedown = function () {presion(this.id)};
document.getElementById("sign").onmousedown = function () {presion(this.id)};
document.getElementById("por").onmousedown = function () {operacion(this.id)};
document.getElementById("dividido").onmousedown = function () {operacion(this.id)};
document.getElementById("menos").onmousedown = function () {operacion(this.id)};
document.getElementById("mas").onmousedown = function () {operacion(this.id)};
document.getElementById("igual").onmousedown = function () {fin(this.id)};
document.getElementById("raiz").onmousedown = function () {resize(this.id)};

//funcion de presionar tecla

function presion (id){

  if (id == "punto" && rep) { //presionar punto
    aux = 1;
    acum('.');
    rep = false;
  }
  else if (id == "on") { //presionar tecla on
    on();
  }
  else if (id != "punto" && id != "on" && id != "sign" && id != "raiz" && id != "dividido" && id != "por" && id != "menos" && id != "igual" && id != "mas") { // presionar tecla numerica
    if (document.getElementById("display").innerHTML == '0') {// comprobación de cero en pantalla
      document.getElementById("display").innerHTML = "";
    }
    var pres = document.getElementById(id).id;
    acum(pres);
  }
  else if (id == "sign"){ //presionar tecla cambio de signo
    if (segoper){
      num = num * -1;
      document.getElementById("display").innerHTML = num;
    }
    else {
      numaux1 = numaux1 * -1;
      document.getElementById("display").innerHTML = numaux1;
    }
  }
  else if (id != "punto") { //presionar tecla de operacion aritmetica
    operacion();
    if (!segoper && final) {
      oper2 (oper, numaux1, numaux2);
    }
  }

  resize(id);
}

function acum (x){ //encadenar caracteres en pantalla
  var y = document.getElementById("display").innerHTML;
  num = y+x;
  if (document.getElementById("display").innerHTML.length < 8+aux) {
    document.getElementById("display").innerHTML = y+x;
  }
}

function operacion (id){ //guardar el numero en pantalla en una variable
  rep = true;
  aux = 0;
  if (segoper){
    numaux1 = num;
  }
  else {
    numaux2 = num;
    if (final) {
      oper2 (oper, numaux1, numaux2);
    }
  }
  num = 0;
  document.getElementById("display").innerHTML = "";
  oper=id;
  segoper = false;
  resize(id);

}

function oper2 (oper, num1, num2){// operaciones artimeticas

  switch (oper) {
    case "mas":
      numresp = parseFloat(num1)+parseFloat(num2);
      break;
    case "menos":
      numresp = num1-num2;
      break;
    case "por":
      numresp = num1*num2;
      break;
    case "dividido":
      numresp = num1/num2;
      break;
  }
  numaux1 = numresp;
}

function fin (id){//operacion igual
  numaux2 = num;
  oper2 (oper, numaux1, numaux2)
  var presentacion = String(numaux1);
  document.getElementById("display").innerHTML = "";
  document.getElementById("display").innerHTML = presentacion.substring(0,8);
  final = false;
  resize(id);
}

function on (){//boton ONC
  num=0;
  numaux1 = 0;
  numaux2 = 0;
  numresp=0;
  document.getElementById("display").innerHTML = 0;
  rep = true;
  segoper = true;
  aux=0;
}

function resize (id){//animacion de teclas
  var tanH = document.getElementById(id);
  tanH.style.transform='scale(0.9)';
  setTimeout(function(){
    tanH.style.transform='scale(1)';
  }, 100);
}
