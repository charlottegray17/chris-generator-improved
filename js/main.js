
/*function calc() {
  var a = document.querySelector("#indie");
  var b = document.querySelector("#studio");

  var c = document.querySelector("#romance");
  var d = document.querySelector("#drama");
  var e = document.querySelector("#angst");
  var f = document.querySelector("#comedy");

  var g = document.querySelector("#film");
  var h = document.querySelector("#tv");

  var i = document.querySelector("#moody");
  var j = document.querySelector("#jolly");

  var k = document.querySelector("#tame");
  var l = document.querySelector("#steamy");
  var results;
  var calculate;

  if (a == selected) + (c == true) {
    document.querySelector("user-result").innerHTML = "The Danny Project";
  }
}*/

function calc() {
  var a;
  if (document.querySelector("#indie").checked) {
    a = "Indie";
  } else if (document.querySelector("#studio").checked) {
    a = "Studio";
  }
  document.querySelector("#answer").innerHTML = a;
}
