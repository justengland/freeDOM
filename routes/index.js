
/*
 * GET home page.
 */
exports.index = function(req, res){
    var now = new Date(),
        model = { 
            title: 'Express', 
            time: pad(now.getHours(), 2) + ':' +  pad(now.getMinutes(), 2) + ':' + pad(now.getSeconds(), 2)
        };
        
    if(typeof req.query.json === 'string' || typeof req.headers.accept.indexOf('json') > -1) {
        res.json(model);
    }
    else {
        res.render('index', model);
    }
};

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}