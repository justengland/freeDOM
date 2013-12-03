// Handle the page interactions for freeDOM

define(["jquery", "handlebars", "templateEngine", "logger"], function($, handlebars, templateEngine, logger) {
    var interactions = {
        init: function() {
            var template;
            $("[data-update]").click(function(e) {
                e.preventDefault();
                
                var $source = $(e.toElement),
                    templateSource = $source.data('template'),
                    action = $source.data('update').split('#'),
                    container = action[1],
                    location = action[0],
                    notReadyData;
                    
                function createOutput(data, compliedTemplate) {
                    if(data && compliedTemplate) {
                        debugger;
                        $(container).empty();
                        $(template(data)).appendTo(container);
                        interactions.init();
                    }
                }

                // Handle download of the data
                var dataRequest = $.ajax({
                    url: location,
                    type: "GET",
                    dataType: "json"
                });
                dataRequest.done(function(data) {
                    // if the template is ready load it
                    if(template) {
                        createOutput(data, template);
                    }
                    else {
                        // If the template is after the data, stash the data
                        notReadyData = data;
                    }
                    logger.log('dataComplete: ' + data);
                });
                dataRequest.fail(function( jqXHR, textStatus ) {
                    logger.error("Request failed: " + textStatus);
                });
                
                // Handled downloading the template, using lazy loading
                if(!template) {
                    var templateRequest = $.ajax({
                        url: templateSource,
                        type: "GET"
                    });
                    
                    templateRequest.done(function(source) {
                        logger.log('template: ' + source);
                        template = Handlebars.compile(source);
                        
                        // If the template is after the data, load the template
                        if(notReadyData) {
                            createOutput(notReadyData, notReadyData);
                            notReadyData = '';
                        }
                    });
                    templateRequest.fail(function( jqXHR, textStatus ) {
                        debugger
                        alert( "Request failed: " + textStatus );
                    });
                }
                e.preventDefault();
            });
        }
    };

    return interactions;
});

