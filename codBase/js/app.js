var rep = true;
var oper = "";
var num1 = 0;

document.getElementById(0).onclick = function () {presion(this.id)};
document.getElementById(1).onclick = function () {presion(this.id)};
document.getElementById(2).onclick = function () {presion(this.id)};
document.getElementById(3).onclick = function () {presion(this.id)};
document.getElementById(4).onclick = function () {presion(this.id)};
document.getElementById(5).onclick = function () {presion(this.id)};
document.getElementById(6).onclick = function () {presion(this.id)};
document.getElementById(7).onclick = function () {presion(this.id)};
document.getElementById(8).onclick = function () {presion(this.id)};
document.getElementById(9).onclick = function () {presion(this.id)};
document.getElementById("punto").onclick = function () {presion(this.id)};
document.getElementById("on").onclick = function () {presion(this.id)};
document.getElementById("sign").onclick = function () {presion(this.id)};
document.getElementById("por").onclick = function () {operacion(this.id)};
document.getElementById("dividido").onclick = function () {operacion(this.id)};
document.getElementById("menos").onclick = function () {operacion(this.id)};
document.getElementById("mas").onclick = function () {operacion(this.id)};
document.getElementById("igual").onclick = function () {fin(oper,num1)};

function presion (id){
  if (id == "punto" && rep) {
    acum('.');
    rep = false;
  }
  else if (id == "on") {
    document.getElementById("display").innerHTML = 0;
    rep = true;
  }
  else if (id != "punto" && id != "on" && id != "sign" && id != "raiz" && id != "dividido" && id != "por" && id != "menos" && id != "igual" && id != "mas") {
    var pres = document.getElementById(id).id;
    acum(pres);
  }
  else if (id == "sign"){
    var num = document.getElementById("display").innerHTML;
    num = num * -1;
    document.getElementById("display").innerHTML = num;
  }
  else {
    operacion();
  }
}

function acum (x){
  if (document.getElementById("display").innerHTML.length < 8) {
    var y = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = y+x;
  }
}

function operacion (id){
  num1 = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = 0;
  oper=id;
}

function fin (oper, num1){
  var num2 = document.getElementById("display").innerHTML;
  switch (oper) {
    case "mas":
      document.getElementById("display").innerHTML = parseFloat(num1)+parseFloat(num2);
      break;
    case "menos":
      document.getElementById("display").innerHTML = num1-num2;
      break;
    case "por":
      document.getElementById("display").innerHTML = num1*num2;
      break;
    case "dividido":
      document.getElementById("display").innerHTML = num1/num2;
      break;
    default:
  }
}
