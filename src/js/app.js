'use strict';
window.VERSION = "0.2";

var app = angular.module('app', ['ngAnimate', 'ui.bootstrap']);
var ventana = gui.Window.get();

window.onerror = function(e) {alert(e)};

var gui = require('nw.gui');
var fs = require('fs');
var path = require('path');
var ffmpeg = require('fluent-ffmpeg');
var exec = require('child_process').exec;

var mostrar_herramientas_de_desarrollo = function() {
    var w = gui.Window.get();
    w.showDevTools();
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
