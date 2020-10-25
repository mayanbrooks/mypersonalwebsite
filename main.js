$(document).ready(function(){
    $('.collapsible').collapsible();
  });


  var app = document.getElementById('nametype');

  var typewriter = new Typewriter(app, {
      loop: true
  });

  typewriter.typeString('Hi, I\'m Maya Brooks!')
  .pauseFor(2500)
   .deleteAll()
   .typeString('Great to meet you!')
   .pauseFor(2500)
   .deleteAll()
   .start();
