var module = function (worker) {
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(['jquery', 'interactions'], factory);
        } else if (typeof exports === 'object') {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like enviroments that support module.exports,
            // like Node.
            module.exports = factory(require('cheerio'), require('interactions'));
        } else {
            // Browser globals (root is window)
            root.returnExports = factory(root, $, interactions);
        }
    }(this, function () {
        // the resulting object that should be cool in both node and the browser.
        return worker();
    }));
};


// Load freeDOM parts into a single freeDOM object
module(function ($, interactions) {
    var freeDOM = {
        init: function() {
            interactions.init();
        },
        interactions: interactions
    };
    
    return freeDOM;
});