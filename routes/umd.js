exports.index = function(req, res){
    var loggr = require("../public/javascripts/lib/sample.logger");
    loggr.log(' ******************** log from the server ********************');
    loggr.log(' ******************** log from the server ********************');
    loggr.log(' ******************** log from the server ********************');
    loggr.log(' ******************** log from the server ********************');
    loggr.log(' ******************** log from the server ********************');
    res.render('umd', {title: "umd", time: "now"});
};