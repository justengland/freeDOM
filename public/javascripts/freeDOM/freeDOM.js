// Load freeDOM parts into a single freeDOM object
define(['jquery', 'interactions'], function ($, interactions) {
    
    var freeDOM = {
        init: function() {
            interactions.init();
        },
        interactions: interactions
    };
    
    return freeDOM;
});