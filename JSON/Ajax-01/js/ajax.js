(function(){
    //ajax es un llamado asincrono a un server
    //y la peticion retorna algo
    $.ajax({
        type: 'GET',
        url: 'http://www.json-generator.com/api/json/get/cgeohDGvfS?indent=2',
        dataType: 'json'
    })
        .done(function(data){
            $('#picFoto').attr("src",data.picture);
            $("#txtNombre").val(data.name);
            $("#txtDireccion").val(data.address);
            $("#txtTelefono").val(data.phone);
            $("#txtGenero").val(data.gender);
            console.log(data.friends[0].name);
        })
        .fail(function(){
            console.log('Fallo');
        })
        .always(function(){
            console.log('Completo');
        });

})();//END