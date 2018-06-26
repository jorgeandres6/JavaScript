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

function presion (id){
  if (id == "punto") {
    acum('.');
  } else {
    var pres = document.getElementById(id).id;
    acum(pres);
  }
}

function acum (x){
  if (document.getElementById("display").innerHTML.length < 8) {
    var y = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = y+x;
  }
}
