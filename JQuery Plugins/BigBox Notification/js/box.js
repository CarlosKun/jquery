(function(){
  $.box = function(opciones, callback){
    opciones = $.extend({
      img: "img/cancel.svg",
      title: undefined,
      content: undefined,
      btnText: 'Aceptar'
    },opciones);

    if(opciones.title === undefined || opciones.content === undefined){
      alert('El titulo es necesario');
      return;
    }

    /* Construccion del HTML */
    var contenido = "";
    contenido = '<div class="box-deep"></div>';
    contenido += '<div class="bigBox-contenedor" align="center">'
    contenido += '<div class="box-close"><img class="img-vector" src="img/cancel.svg" alt=""></div>'
    contenido += '<div class="box-circle"><img  class="img-vector" src="'+opciones.img+'" alt=""></div>'
    contenido += '<div class="box-contenido">'
    contenido += '<span class="box-title">'+opciones.title+'</span>'
    contenido += '<span class="box-text">'+opciones.content+'</span>'
    contenido += '</div>'
    contenido += '<button class="box-btn" name="button">'+opciones.btnText+'</button>'
    contenido += '</div>'
    $('body').append(contenido);
    animar_entrada();

    //Funcion de close
    //Si dan click en cualquier parte del body pero que tenga la clase .box-close
    $('.box-close').on("click",function(){
      animar_salida();
      //typeOf especifica el tipo del valor
      if(typeof callback == 'function'){
        callback('boton-cerrar');
      }
    });

    //funcion principal
    $('.box-btn').on("click",function(){
      animar_salida();
      //typeOf especifica el tipo del valor
      if(typeof callback == 'function'){
        callback('principal');
      }
    });

    //Animacion de entrada
    function animar_entrada(){
      var $fondo = $(".box-deep");
      var $bigbox = $('.bigBox-contenedor');
      var ancho = $(window).width();
      var alto = $(window).height();
      var anchoB = $bigbox.width();
      var altoB = $bigbox.height();

      $bigbox.css({
        top: (alto/2) - (altoB/2),
        left: (ancho/2) - (anchoB/2),
      });

      $fondo.show();
      $bigbox.show();

      // $fondo.fadeIn(500);
      var tl = new TimelineMax();
      tl.to($fondo,0.5,{opacity:0.3})
        .to($bigbox,0.5,{opacity:1},'-=0.5')
        .from($bigbox,0.8,{y:'-=20', ease: Bounce.easeOut}, '-=0.5');
    }

    //Animacion de entrada
    function animar_salida(){
      var $fondo = $(".box-deep");
      var $bigbox = $('.bigBox-contenedor');
      // $fondo.fadeOut(500);
      var tl = new TimelineMax();
      tl.to($fondo,0.3,{opacity: 0})
        .to($bigbox,0.3,{opacity: 0, onComplete: remover_bigbox},'-=0.3');
    }

    function remover_bigbox(){
      var $fondo = $(".box-deep");
      var $bigbox = $('.bigBox-contenedor');
      $fondo.remove();
      $bigbox.remove();
    }
  }; //end funcion jquery
})();//end anonima
