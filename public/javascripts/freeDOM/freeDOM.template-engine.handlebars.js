var mod = function (worker) {
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
        return worker.apply(this, arguments);
    }));
};

// freeDOM templating for Handlebars.js
mod(function($, handlebars, logger) {
    return {
        render: function(template, context) {
            var compiledTemplate = handlebars.compile(template, context);
            return compiledTemplate(context);
        }
    };
});