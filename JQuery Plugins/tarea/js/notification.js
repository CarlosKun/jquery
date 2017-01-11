/**
 * Created by Carlos on 05/01/2017.
 */
(function(){
    $.notificacion = function(opciones){
        opciones = $.extend({
            img: 'foto.jpg',
            title: 'Anne Caroline',
            subtitle: 'Bluemeanau, SC',
            icon: 'new-text-message.png'
        },opciones);

        var notification = "";
        notification += '<div class="notification-content">'
        notification +=    '<div class="notification-image">'
        notification +=        '<img src="img/'+ opciones.img +'" alt="">'
        notification +=    '</div>'
        notification +=    '<div class="notification-text">'
        notification +=        '<span class="notification-title">'+ opciones.title +'</span>'
        notification +=        '<span class="notification-subtitle">'+ opciones.subtitle +'</span>'
        notification +=    '</div>'
        notification +=    '<div class="notification-icon">'
        notification +=        '<img src="img/'+ opciones.icon +'" alt="">'
        notification +=    '</div>'
        notification += '</div>'

        $('body').append(notification);
        input();

        setTimeout(function(){
            output();
        }, 5000);
    }
    function input(){
        var $content = $('.notification-content');
        tl = new TimelineMax();
        tl.from($content,1.5,{x: '+=100px', opacity: 0})
            .to($content,1.5,{opacity: 1});
        /*$content.animate({
            right: '+=240',
            opacity: '1',
        },'slow'); */
    }

    function output(){
        var $content = $('.notification-content');
        $content.fadeOut('slow');
    }

})();
