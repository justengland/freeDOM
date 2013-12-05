var module = function (worker) {
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(factory);
        } else if (typeof exports === 'object') {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like enviroments that support module.exports,
            // like Node.
            module.exports = factory();
        } else {
            // Browser globals (root is window)
            root.returnExports = factory(root.b);
        }
    }(this, function () {
        // the resulting object that should be cool in both node and the browser.
        return worker();
    }));
};

// Provider simple logging for freeDOM
define(function () {
    var logger = {
        log: function(message) {
            if(console && console.log) {
                console.log(message);
            }
        },
        error: function(message) {
            if(console && console.error) {
                console.error();
            }
        }
    };
    
    return logger;
});