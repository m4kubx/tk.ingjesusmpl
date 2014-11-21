$(document).on("ready",function(){
    splash();



});

function splash(){
    var elem = $("header div");

    elem.css("width", "20em");

    setTimeout(function() {
        var estilos = {
            "top": "0"
        }
        elem.css(estilos);

    },0);


    elem.css("transform", "rotate(-990deg)");
    setTimeout(function() {
        var estilos = {
            "height": "20em"
        }
        elem.css(estilos);
    },2000);

    show("#main", 73, 2000);
    show("aside",25, 2500)
    setTimeout(function() {
        var estilos = {
            "height": "4em"
        }
        $("footer").css(estilos);
    },3000);
}

function show(elem, val, tim) {
    var elem = $(elem);
    setTimeout(function() {
        var estilos = {
            "width": val + "%"
        }
        elem.css(estilos);
    },tim);

}
