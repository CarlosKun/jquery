(function(){

  $.slidesShow = function(opciones){
    opciones = $.extend({
      divDestino: ".slider",
      intervalo: 1500,
      slides: [],
      ancho: 600,
      velocidad: 4000,
      btnColor: 'white',
    },opciones);

    if(opciones.slides.length === 0){
      alert("Los slides son necesarios.");
      return;
    }

    opciones.velocidad = opciones.velocidad / 1000;

    var actual = 0  //es slider que se ve
    var ancho = opciones.ancho;
    var slides = opciones.slides.length;


    //creacion del slider
    var contenido = "";
    contenido += "<ul>"
    for(var i=0; i<opciones.slides.length; i++){
      contenido += '<li><img class="img-slide" src="'+ opciones.slides[i] +'" alt=""></li>'
    }
    contenido += "</ul>";
    $(opciones.divDestino).append(contenido);
    var $slideshow = $( opciones.divDestino + ' ul');

    //Creacion de los botones
    contenido = "";
    contenido += '<div class="slideShowButtons">'
    for(var i=0; i<opciones.slides.length; i++){
      contenido += '<div data-idx="'+i+'" class="slideButton"></div>';
    }
    contenido += '</div>'
    $(opciones.divDestino).append(contenido);

    var $puntos = $('.slideShowButtons');
    $puntos.find('div').eq(0).css({backgroundColor: opciones.btnColor,});

     var intervalo = setInterval(function(){
       move('next');
     },opciones.intervalo);

    function move(dir, click){

      (dir === 'next' ) ? actual-- : actual ++;

      if(actual > 0){
        actual = (slides -1) * -1;
      }else if(actual <= (slides * -1)){
        actual = 0;
      }

      movePerPoint(actual)
    }

    function movePerPoint(actual, click){
      if(click){ clearInterval(intervalo); } //destruimos el intervalo

      var margin = actual * ancho
      var idx = actual * -1;

      var $puntoActual = $puntos.find('div').eq(idx);
      var $demasPuntos = $puntos.find('div').not($puntoActual);

      var tl = new TimelineMax();
      tl.to($slideshow, opciones.velocidad, {marginLeft: margin, ease: Elastic.easeOut.config(1, 0.3)})
        .to($puntoActual,0.5,{backgroundColor: opciones.btnColor},"-=4")
        .to($demasPuntos,0.5,{backgroundColor: '#a1a1a1'}, "-=4");
    }

    $('.slideButton').on('click',function(){
      var idx = $(this).data('idx');
      idx = idx * -1;
      movePerPoint(idx, true);
    });

    $('.btn-move').on('click', function(){
      var dir = $(this).data('direction');
      move(dir,true);
    })
  }

})(); // end anonimous function
