(function(){

	var Latitude = 20.620411;
	var Longitude = -105.230659;


	$.ajax({
		type: 'GET',
		url : 'http://api.openweathermap.org/data/2.5/weather?id=3991328&APPID=f62eea4c3b43e858fb505905dde0a862',
		dataType: 'jsonp'
	})
	.done(function( data ){
		console.log( data ); // Se imprime en consola la api
		$('#txtName').val(city = data.name+", "+data.sys.country);
		console.log(data.weather[0].description)
		$('#picIcon').attr('src', 'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png');

	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();