
var fs   = require("fs");
var querystring = require("querystring");
var https = require('https');
var http = require('http');
var cheerio = require('cheerio');

var LibSHML = require('../public/javascripts/lib/shml.js');
var shml = new LibSHML.SHMLClass();

exports.index = function(req, res){
    console.log("app loaded");
    
    var $ = cheerio.load("<div id='thingy'><div class='foo'>hi</div></div>");
    $('#thingy').find('.foo').addClass("bar");
    
    res.send($.html());
};

//constants for this project
var path_to_views = __dirname+"/../views/";

//this abstracts getting the post body from a request. You pass in 
//a method that will be called with the resulting query string obj.
var getPost = function(req, success){
    // Read Body when Available
    req.on("readable", function(){
        req.body = req.read();
    });

    // Do something with it
    req.on("end", function(){
        var query = querystring.parse(req.body.toString());
        success && success(query);
    });
}

//given a file name relative to the view path set above,
//load the view, process it with shml returning the new text.
var processSHMLFromPath = function(path){
    return shml.process(
        fs.readFileSync(path_to_views+path, "utf8")
    )
}

//exports.index = function(req, res){
//    console.log("app loaded");
//    //res.header("Access-Control-Allow-Origin", "*");
//    var rendered_html = processSHMLFromPath("packaging.shml");
//    res.send(rendered_html);
//};

//this shows how to get post parameters
//exports.savestate = function(req, res){
//    
//    getPost(req, function(query){
//        fs.writeFileSync(path_to_packaging_states, query.appstate);
//        res.send("saved state");
//        console.log("...saved app state");
//    });
//};
