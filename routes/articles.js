var express = require('express');
var router = express.Router();
var Article = require('../models/article');

router.get('/', function(req, res, next){
  
  Article.find({},function(err, articles){

    /* if(err){
      return res.json({'success':false, 'error': err});
    } */

     res.render('articles/index', {'articles': articles});

  });
  
});

/* GET home page. */
router.get('/:slug', function(req, res, next) {

  var slug = req.params.slug;

  Article.findOne({'slug':slug}, function(err, article){

    /* if(err){
      return res.json({'success':false, 'error': err});
    } */

    res.render('articles/view' ,{'article': article});

  });

});

module.exports = router;
