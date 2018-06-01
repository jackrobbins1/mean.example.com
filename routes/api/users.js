var express = require('express');
var router = express.Router();
var User = require('../../models/user');

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: false
}));

/* GET users listing. */
router.get('/', function(req, res, next) {

  User.find({},function(err, users){
    if(err){
      return res.json({'success':false,'error': err});
    }

    return res.json({'success':true, 'users':users});
  });

});

// Register a new user

router.post('/register',function(req,res,next){
  var data = req.body;

  User.register(new User({
    username: data.username,
    email: data.email,
    first_name: data.first_name,
    last_name: data.last_name,
  }),
  data.password, function(err, user){
    if(err){
      return res.json({success: false,
         user: req.body,
         errors: err
        });

      }

        return res.json({
          success: true,
          user: user
        });
    
  });

});

// Get a single user
router.get('/:userId', function(req, res, next){
  var userId = req.params.userId;

  User.findOne({'_id':userId}, function(err, user){
    if(err){
      return res.json({'success':false,'error': err});
    }

    return res.json({'success':true, 'user':user});
  });

});

/* Create/Post a user */
router.post('/', function(req, res, next) {

  User.create(new User({
    username: req.body.username,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,

  }),
  
  function(err, user){
    if(err){
      return res.json({'success':false, user:req.body, 'error': err});
    }

    return res.json({'success':true, 'user':user});
  });

});

// Update a user
router.put('/', function(req,res,next){

  // Find the record of the user to be updated
  User.findOne({'_id': req.body._id}, function(err, user){
  // Return false if the user is not found
  if(err){
    return res.json({success: false, error: err});
  }
  // If the user is found, update the record
  if (user){
    // Only update value that were passed to the request
    // To the endpoint
    let data = req.body;

    if(data.username){
      user.username = data.username;
    }

    if(data.email){
      user.email = data.email;
    }

    if(data.first_name){
      user.first_name = data.first_name;
    }

    if(data.last_name){
      user.last_name = data.last_name;
    }

    user.save(function(err){
      if(err){
        return res.json({success: false, error: err})
      }

      return res.json({success:true, user:user});
    });
  }
  });

});

// Delete a user

router.delete('/:userId', function(req,res,next){
  var userId = req.params.userId;

  User.remove({'_id':userId},function(err,removed){
    if(err){
      return res.json({success:false, error:err});
    }

    return res.json({success:true, status: removed});
    
  });
});

module.exports = router;
