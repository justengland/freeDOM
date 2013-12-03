// Load freeDOM parts into a single freeDOM object
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