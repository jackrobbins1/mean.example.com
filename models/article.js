var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

// Create a schema
var Article = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        unique: [true, 'Title is already in use']
    },
    slug: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: [true, 'Slug is already in use']
    },
    keywords: String,

    description: String,

    body: String,
    
    created: {
        type: Date,
        default: Date.now
    },

    published: {
        type: Date,
        default: Date.now,
        //required: true,
    },

    modified: {
        type: Date,
        default: Date.now
    },

    published: {
        type: Date,
        required: [true, 'Please enter a publish date'],
      }

  });

//Auto set the slug prior to validation
Article.pre('validate', function(next){
    this.slug = slug(this.title).toLowerCase();
    next();
  });

Article.pre('save', function(next){
    this.modified = new Date().toISOString();
    next();
});

Article.plugin(uniqueValidator);
module.exports  = mongoose.model('Article', Article);