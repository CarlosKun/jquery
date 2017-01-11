(function(){


	$.ajax({
		type: 'GET',
		url : 'http://www.json-generator.com/api/json/get/cqSvgvDiEO?indent=2',
		dataType: 'json'
	})
	.done(function( data ){
		var persons = data;
		console.log(data);
		for (var i = 0; i<= persons.length; i++){
			var person = persons[i];
			var tags = "";
			for (j=0; j<person.tags.length; j++){
				tags += '<span class="label label-primary">'+ person.tags[i]+ "</span> ";
			}
			var html = "";
			html += '<tr>';
			html +=		'<td>'+ person.name +'</td>';
			html +=		'<td>'+ person.age +'</td>';
			html +=		'<td>'+ tags +'</td>';
			html += '</tr>';
			$('table').append(html);outsourcing
		}
	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();