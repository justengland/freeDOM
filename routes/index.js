
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.locals({ title: 'Express' });
  res.render('index');
};