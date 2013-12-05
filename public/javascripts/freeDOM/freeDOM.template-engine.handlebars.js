var module = function (worker) {
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(["jquery", "handlebars", "logger"], factory);
        } else if (typeof exports === 'object') {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like enviroments that support module.exports,
            // like Node.
            module.exports = factory(require('cheerio'), require('handlebars'), require('./freeDOM.logger.js'));
        } else {
            // Browser globals (root is window)
            root.returnExports = factory(root, $, interactions, logger);
        }
    }(this, function () {
        // the resulting object that should be cool in both node and the browser.
        return worker();
    }));
};


// freeDOM templating for Handlebars.js
module(function($, Handlebars, logger) {
    function getTemplate(path) {
         var source, template;
     
         var request = $.ajax({
             url: path,
             cache: true,
         });
     
         request.done(function(data) {
             logger.log('hello: ' + data);
             // $("#log").html(msg);
         });
     
         request.fail(function(jqXHR, textStatus) {
             logger.error("Request failed: " + textStatus);
         });
    }
        
    var templateEngine = function(model, template) {
        debugger;   
    };

    return templateEngine;
});