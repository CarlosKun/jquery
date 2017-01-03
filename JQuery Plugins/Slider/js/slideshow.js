(function(){
  $.slideShow = function(opciones){
      opciones = $.extend({
      divDestino: ".slideshow",
      ancho: 600,
      intervalo: 1500,
      slides: [],
      velocidad: 1200,
      color: "#ba007c",
    },opciones);

    if(opciones.slides.length === 0){
      alert("Los slides son necesarios");
      return;
    }

    opciones.velocidad = opciones.velocidad / 1000;

    var actual = 0;
    var ancho = opciones.ancho; // ancho de la imagen
    var slides = opciones.slides.length;

    //Creacion del slideshow
    var content = "";
    content += "<ul>"
    for (var i = 0; i < opciones.slides.length; i++) {
      content += "<li><img src='"+ opciones.slides[i] + "'></li>"
    }
		content += "</ul>";
    $(opciones.divDestino).append(content);
    var $slideshow = $(opciones.divDestino + " ul");
    console.log($slideshow);

    // Creacion de los botones.
    content = "";
    content += "<div class='  slideShowButtons'>"
    for (var i = 0; i < opciones.slides.length; i++) {
      content += "<div data-idx='"+ i +"' class='slideButton'></div>"
    }
    content += "</div>";
    $(opciones.divDestino).append(content);
    var $puntos = $('.slideShowButtons');


    $puntos.find('div').eq(0).css({
      backgroundColor: opciones.color
    });

    var intervalo = setInterval(function(){
      mover("sig");
    },opciones.intervalo);

    function mover ( dir, click ){
      (dir === "sig") ? actual-- : actual++;

      if(actual > 0){8
        actual = (slides - 1) * -1;
      }else if(actual <= (slides * -1)){
        console.log("menor");
        actual = 0;
      }

      move_per_point(actual, click);
      // Con jquery animate
      //    $slideshow.animate({
      //      marginLeft: margin,
      //    }, 450);
    }

    function move_per_point(actual, click){
      if(click){
        clearInterval(intervalo);
      }

      var margin = actual * ancho;
      var idx = actual * -1;
      var $puntoActual = $puntos.find("div").eq(idx);
      var $demasPuntos = $puntos.find("div").not($puntoActual);

      var tl = new TimelineMax();

      tl.to($slideshow,opciones.velocidad,{ marginLeft: margin, ease: Elastic.easeOut.config(1, 0.3)})
      .to($puntoActual,0.5, {backgroundColor: opciones.color}, "-=2")
      .to($demasPuntos, 0.5, {backgroundColor: "#a1a1a1"}, "-=2");
    }

    $('.slideButton').on("click", function(){
      var idx = $(this).data('idx');
      idx = idx * -1;
      console.log(idx);
      move_per_point(idx,true);
    });

    $(".btn-slide").on('click', function() {
      var dir = $(this).data('mov');
      mover(dir,true);
    });
  };

})();
