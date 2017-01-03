(function(){
  var actual = 0;
  var ancho = 600;
  var $slideshow = $(".slideshow ul");
  var slides = $slideshow.find("li").length;
  var intervalo = setInterval(function(){
    mover("sig");
  },1500);

  function mover ( dir, click ){
    if(click){
      clearInterval(intervalo);
    }
    (dir === "sig") ? actual-- : actual++;

    if(actual > 0){
      actual = (slides - 1) * -1;
    }else if(actual <= (slides * -1)){
      actual = 0;
    }
    var margin = actual * ancho;
    console.log(actual);
    var tl = new TimelineMax();
    tl.to($slideshow,2,{
      marginLeft: margin,
      ease: Elastic.easeOut.config(1, 0.3)  ,
    });
    // Con jquery animate
    //    $slideshow.animate({
    //      marginLeft: margin,
    //    }, 450);
  }

  $(".btn-slide").on('click', function() {
    var dir = $(this).data('mov');
    mover(dir,true);
  });

})();
