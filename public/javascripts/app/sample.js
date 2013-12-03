// Entry point for the freeDOM client application
requirejs.config({
    "baseUrl": "/javascripts",
    "paths": {
      "app": "app",
      "jquery": "lib/jquery",
      "logger" : "lib/sample.logger",
    }
});

define(["jquery", "logger"], function($, loggr) {
    loggr.log(' ******************** log from the client ********************');
    loggr.log(' ******************** log from the client ********************');
    loggr.log(' ******************** log from the client ********************');
    loggr.log(' ******************** log from the client ********************');
    loggr.log(' ******************** log from the client ********************');
});