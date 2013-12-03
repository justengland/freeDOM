// Entry point for the freeDOM client application
requirejs.config({
    "baseUrl": "/javascripts",
    "paths": {
        "app": "app",
        "jquery": "lib/jquery",
        "freeDOM": "freeDOM/freeDOM",
        "interactions": "/javascripts/freeDOM/freeDOM.interactions",
        "templateEngine": "/javascripts/freeDOM/freeDOM.template-engine.handlebars",
        "logger": "/javascripts/freeDOM/freeDOM.logger",
        "handlebars": "lib/handlebars"
    }
});

define(["jquery", "freeDOM"], function($, freeDOM) {
    freeDOM.init();
});