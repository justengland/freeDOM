// freeDOM templating for Handlebars.js
define(["jquery", "handlebars", "logger"], function($, Handlebars, logger) {
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