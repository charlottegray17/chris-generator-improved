function projects() {  //this one gives the result I want
  var title;
  var image;
  var description;
  if (document.querySelector("#studio").checked &&
      document.querySelector("#comedy").checked &&
      document.querySelector("#tv").checked &&
      document.querySelector("#jolly").checked &&
      document.querySelector("#tame").checked) {
    title = "the Mindy Project";
    image = 'img/the-mindy-project.jpg';
    description = "an adorable comedy aout two lost souls finding one another";
  } else if
     (document.querySelector("#indie").checked &&
      document.querySelector("#angst").checked &&
      document.querySelector("#film").checked &&
      document.querySelector("#moody").checked &&
      document.querySelector("#steamy").checked) {
      title = "Blame";
      image = 'img/blame.jpg';
      description = "a high school retelling of the crucible which will most definitiely leave you hot for teacher";
  } else if
    (document.querySelector("#studio").checked &&
     document.querySelector("#comedy").checked &&
     document.querySelector("#film").checked &&
     document.querySelector("#jolly").checked &&
     document.querySelector("#tame").checked) {
     title = "Julie & Julia";
     image = 'img/jule-and-julia.jpg';
     description = "Salivate over a smorgosboard of French cuisine, and Chris being an adorable supportive boyfriend";
 } else if
    (document.querySelector("#studio").checked &&
     document.querySelector("#drama").checked &&
     document.querySelector("#tv").checked &&
     document.querySelector("#jolly").checked &&
     document.querySelector("#steamy").checked) {
     title = "Sharp Objects";
     image = 'img/sharp-objects.jpg';
     description = "Be frustrated for several episodes in the south, but enjoy cheeky detective Chris getting far too involved with suspect in the name of the case";
} else {
    title = "Away We Go";
    image = 'img/away-we-go.jpg';
    description = "a high school retelling of the crucible which will most definitiely leave you hot for teacher";
  }
  document.querySelector("#answer").innerHTML = title;
  document.querySelector("#image").src = image;
  document.querySelector("#text").innerHTML = description;
}

function startAgain() {
 var x = document.getElementById("start-over");
 if (x.style.display === "none") {
   x.style.display = "block";
 } else {
   x.style.display = "none";
 }
}
