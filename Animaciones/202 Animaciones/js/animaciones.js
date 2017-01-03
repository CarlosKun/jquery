(function(){
	var $cajaRoja = $(".cajaRoja");

	$("#size").on("click",function(){
		$cajaRoja.animate({
			width: "+=100px",
			height: "+=100px",
		},1000,function(){
			console.log("Termino la animacion del tamaño");
		})
		.animate({width: "-=100px", height: "-=100px"})
		.animate({opacity: "0.1"},2000,function(){
			$(this).remove()
		})
	});

})();
