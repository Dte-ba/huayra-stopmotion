window.mostrar_herramientas_de_desarrollo = function() {
    var gui = require('nw.gui');
    var ventana = gui.Window.get();
    ventana.showDevTools();
};

window.mostrar = function(elemento) {
    /* Se ejecuta cuando la imagen del timeline está lista para ser mostrada. */

    setTimeout(function() {
        elemento.classList.remove('img-invisible');
        elemento.classList.add('img-visible');
        try {
            elemento.parentElement.classList.remove('cargando');
        } catch(e) {
            console.error(e);
        }
    }, 300);
};

window.onerror = function(e) {
    alert(e)
};