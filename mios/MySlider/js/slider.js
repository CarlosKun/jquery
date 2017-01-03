(function(){
  $.sliderShow = function(opciones){
    opciones = $.extend({
      images: [],
      ancho: 600,

    }, opciones);

    var actual = 0;
    var ancho = opciones.ancho;


    //images
    var content = "";
    var circle = "";
    content += "<ul>";
    circle += '<div class="slideShowButtons">';
      for (var i = 0; i < opciones.images.length; i++) {
        content += '<li><img class="img-slide" src="'+opciones.images[i]+'" alt=""></li>'
        circle += '<div data-idx="0" class="slideButton"></div>';
      }
    content += "</ul>";
    circle += '<div>'
    $('.slider').append(content).append(circle);
    var $sliderShow = $('.slider ul');
    var slides = opciones.images.length;
    var $puntos = $('.slideShowButtons').find('div');
    $puntos.eq(0).css({backgroundColor: 'white'});

    var auto = setInterval(function(){
      move('next');
    },2000)

    $('.btn-move').on('click', function() {
      var direction = $(this).data('direction');
      move(direction, true);
    });

    function move(direction, click) {

      (direction === 'next') ? actual-- : actual++;
      if(actual > 0){
        actual = (slides -1) * -1;
      }else if (actual <= (slides * -1) ) {
        actual = 0;
      }

      move_per_point(actual)
    }

    $('.slideButton').on('click',function(){
      var idx = $(this).data('idx');
      idx = idx * -1;
      move_per_point(idx, true);
    });

    function move_per_point(actual, click){
      if(click) clearInterval(auto);
      margin = ancho * actual;

      var idx = actual * -1;
      var puntoActual = $puntos.eq(idx);
      var demasPuntos = $puntos.not(puntoActual);

      console.log(demasPuntos);
      var tl = new TimelineMax();
      //var.to(jquery,time,{cssAnimate})
      tl.to($sliderShow,4,{marginLeft: margin, ease: Elastic.easeOut.config(1, 0.3)})
      .to(puntoActual,0.5,{backgroundColor: '#ffffff'},'-=4')
      .to(demasPuntos,0.5,{backgroundColor: '#a1a1a1'},'-=4');

      // $($sliderShow).animate({marginLeft: margin}, 1000);
    }
  }
})();
