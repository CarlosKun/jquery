(function(){
  var $cajaRoja = $(".cajaRoja");

  function mover( dir ){
    $cajaRoja.clearQueue();
    switch (dir) {
      case "arriva":
        $cajaRoja.animate({
          top: "-=50px",
        },200);
        break;
      case "abajo":
        $cajaRoja.animate({
          top: "+=50px"
        },200);
        break;
      case "izquierda":
        $cajaRoja.animate({
          left: "-=50px"
        },200);
        break;
      case "derecha":
        $cajaRoja.animate({
          left: "+=50px"
        },200);
        break;
      default:
        $cajaRoja.animate({
          top: "0px",
          left: "0px"
        },1000);
    }
  }

  $(document).on("keypress",function(e){
    var keyCode = e.keyCode;
    console.log(keyCode);
    switch (keyCode) {
      case 119:
        mover("arriva");
        break;
      case 115:
        mover("abajo");
        break;
      case 97:
        mover("izquierda");
        break;
      case 100:
        mover("derecha");
        break;
      default:
        mover();
    }
  });

  $("button").on("click",function(){
    var dir = $(this).data('dir');
    console.log(dir);
    mover( dir )
  });
})()
