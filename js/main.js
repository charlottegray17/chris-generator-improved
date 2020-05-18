function projects() {  //this one gives the result I want
  var title;
  var title2;
  var image;
  var description;
  var trailer;
  var message = "If you're not a fan of your Messina recommendation (doubtful), please click below to start again."
  if (/*document.querySelector("#studio").checked &&*/
      document.querySelector("#comedy").checked &&
      document.querySelector("#tv").checked &&
      document.querySelector("#jolly").checked &&
      document.querySelector("#tame").checked) {
    title = "The Mindy Project";
    title2 = "2012";
    image = 'img/the-mindy-project.jpg';
    description = "an adorable comedy about two lost souls finding one another";
    trailer = 'https://www.youtube.com/watch?v=btnPlaf078E';
  } else if
     (/*document.querySelector("#indie").checked &&*/
      document.querySelector("#angst").checked &&
      document.querySelector("#film").checked &&
      document.querySelector("#moody").checked &&
      document.querySelector("#steamy").checked) {
      title = "Blame";
      title2 = "2020";
      image = 'img/blame.jpg';
      description = "a high school retelling of the crucible which will most definitiely leave you hot for teacher";
      trailer = 'https://www.youtube.com/watch?v=xqQ_ZAuPH8g';
  } else if
    (/*document.querySelector("#studio").checked &&*/
     document.querySelector("#comedy").checked &&
     document.querySelector("#film").checked &&
     document.querySelector("#jolly").checked &&
     document.querySelector("#tame").checked) {
     title = "Julie & Julia";
     title2 = "2009";
     image = 'img/jule-and-julia.jpg';
     description = "Salivate over a smorgosboard of French cuisine, and Chris being an adorable supportive boyfriend";
     trailer = 'https://www.youtube.com/watch?v=ozRK7VXQl-k';
 } else if
    (/*document.querySelector("#studio").checked &&*/
     document.querySelector("#drama").checked &&
     document.querySelector("#tv").checked &&
     document.querySelector("#jolly").checked &&
     document.querySelector("#steamy").checked) {
     title = "Sharp Objects";
     title2 = "2020";
     image = 'img/sharp-objects.jpg';
     description = "Be frustrated for several episodes in the south, but enjoy cheeky detective Chris getting far too involved with suspect in the name of the case";
     trailer = 'https://www.youtube.com/watch?v=_v8Fm3O8cp0';
 } else if
    (/*document.querySelector("#indie").checked &&*/
     document.querySelector("#drama").checked &&
     document.querySelector("#film").checked &&
     document.querySelector("#moody").checked &&
     document.querySelector("#steamy").checked) {
     title = "Monogamy";
     title2 = "2010";
     image = 'img/monogamy.jpg';
     description = "Watch a young, bearded and very nearly married Chris, stalk someone and wish he was stalking you";
     trailer = 'https://www.youtube.com/watch?v=s9_x3ytUkQU';
 } else if
    (/*document.querySelector("#indie").checked &&*/
     document.querySelector("#drama").checked &&
     document.querySelector("#film").checked &&
     document.querySelector("#jolly").checked &&
     document.querySelector("#tame").checked) {
     title = "Ruby Sparks";
     title2 = "2012";
     image = 'img/ruby-sparks.jpg';
     description = "Chris is a perfect sidekick is this kinda dark rom com about a dream girl come to life";
     trailer = 'https://www.youtube.com/watch?v=xb3_AE-UinY';
 } else if
    (/*document.querySelector("#indie").checked &&*/
     document.querySelector("#drama").checked &&
     document.querySelector("#film").checked &&
     document.querySelector("#jolly").checked &&
     document.querySelector("#tame").checked) {
     title = "Ira and Abby";
     title2 = "2006";
     image = 'img/ira-and-abby.jpg';
     description = "Chris is in love and it's pretty darn cute, until of course - its starts to spiral";
     trailer = 'https://www.youtube.com/watch?v=oqF9eJp0o0M';
 } else if
    (/*document.querySelector("#indie").checked &&*/
     document.querySelector("#drama").checked &&
     document.querySelector("#film").checked &&
     document.querySelector("#jolly").checked &&
     document.querySelector("#tame").checked) {
     title = "An Invisible Sign";
     title2 = "2010";
     image = 'img/an-invisible-sign.jpg';
     description = "Chris is a Science Teacher who has the hots for fellow teacher at school who is pretty, awkward and adorable";
     trailer = 'https://www.youtube.com/watch?v=4x2RzV1UrW8';
 } else if
    (/*document.querySelector("#indie").checked &&*/
     document.querySelector("#angst").checked &&
     document.querySelector("#film").checked &&
     document.querySelector("#moody").checked &&
     document.querySelector("#steamy").checked) {
     title = "28 Hotel Rooms";
     image = 'img/28-hotel-rooms-alternate.jpg';
     description = "The mini bar bill is almost too much to bare, for this couple. Engulfed in an extra marital affair they meet when they can in hotel rooms.";
     trailer = "https://www.youtube.com/watch?v=bSN5Hvh8bts";
 } else if
    (/*document.querySelector("#studio").checked &&*/
     document.querySelector("#drama").checked &&
     document.querySelector("#film").checked &&
     document.querySelector("#moody").checked &&
     document.querySelector("#tame").checked) {
     title = "Argo";
     title2 = "2012";
     image = 'img/argo.jpg';
     description = "I don't recall much of this film, becuase I genuinely don't think Chris is in it much but it won a lot of awards so there's that";
     trailer = "https://www.youtube.com/watch?v=JW3WfSFgrVY";
} else if
    (/*document.querySelector("#studio").checked &&*/
     document.querySelector("#drama").checked &&
     document.querySelector("#tv").checked &&
     document.querySelector("#moody").checked &&
     document.querySelector("#tame").checked) {
     title = "Damages";
     title2 = "2011";
     image = 'img/damages.jpg';
     description = "Chris is moody mofo in this one. Will shake you to your core. CAUTION: You may also become addicted to 'Damages'.";
     trailer = "https://www.youtube.com/watch?v=k0ql9NG_ooc";
} else if
   (/*document.querySelector("#studio").checked &&*/
    document.querySelector("#drama").checked &&
    document.querySelector("#tv").checked &&
    document.querySelector("#moody").checked &&
    document.querySelector("#tame").checked) {
    title = "The Newsroom";
    title2 = "2012";
    image = 'img/the-newsroom.jpg';
    description = "Chris is a snarky well dressed mumma's boy in this fast paced newsroom comedy. Great all-round cast here that you'll surely full in love with.";
    trailer = "https://www.youtube.com/watch?v=lB944ODCK24";
} else if
   (/*document.querySelector("#studio").checked &&*/
    document.querySelector("#drama").checked &&
    document.querySelector("#tv").checked &&
    document.querySelector("#moody").checked &&
    document.querySelector("#tame").checked) {
    title = "The Sinner";
    title2 = "2020";
    image = 'img/the-sinner.jpg';
    description = "Chris is a Creepy mcCreeperson trying to be Godly, and dragging his old pal Jamie up/down with him.";
    trailer = "https://www.youtube.com/watch?v=c0G7U-A8Qh8";
} else if
   (/*document.querySelector("#studio").checked &&*/
    document.querySelector("#drama").checked &&
    document.querySelector("#film").checked &&
    document.querySelector("#jolly").checked &&
    document.querySelector("#steamy").checked) {
    title = "Birds of Prey";
    title2 = "2020";
    image = 'img/birds-of-prey.jpeg';
    description = "Psyhco NEVER - and I mean never - looked so good";
    trailer = "https://www.youtube.com/watch?v=kGM4uYZzfu0";
} else if
   (/*document.querySelector("#studio").checked &&*/
    document.querySelector("#drama").checked &&
    document.querySelector("#film").checked &&
    document.querySelector("#jolly").checked &&
    document.querySelector("#tame").checked) {
    title = "Away We Go";
    image = 'img/away-we-go.jpg';
    description = "Chris at one point eats a stack of pancackes with the happiest grin anyone ever grinned. Worth watching just for that.";
    trailer = "https://www.youtube.com/watch?v=v_MOfQEwJW8";
} else {
    title = "hmm, whilst Chris has a substantial repertoire, there's nothing in our records matching that specification. Sorry!";
    title2 = "Please accept this very satisfying dancing GIF instead and try again.";
    image = 'img/danny-dance.gif';
    description = "Please click below to start over";
    trailer = "";
    message = "";
  }
  document.querySelector("#answer").innerHTML = title;
  document.querySelector("#secondary-answer").innerHTML = title2;
  document.querySelector("#image").src = image;
  document.querySelector("#text").innerHTML = description;
  document.querySelector("#trailer").href = trailer;
  document.querySelector("#start-again").innerHTML = message;
}

function startAgain() {
 var x = document.getElementById("start-over");
 if (x.style.display === "none") {
   x.style.display = "block";
 } else {
   x.style.display = "none";
 }
}
