var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  uniqueValidator = require('mongoose-unique-validator'),
  slug = require('slug');

//Create a schema
var Article = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title'],
    unique: [true, 'Title is already in use']
  },
  slug: {
    type: String,
    required: [true, 'Please enter a slug'],
    unique: [true, 'Slug is already in use']
  },
  keywords: String,
  description: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  },
  published: {
    type: Date
    //required: [true, 'Please enter a pub date'],
  }
});

//Auto set the slug prior to validation
Article.pre('validate', function(next){
  this.slug = slug(this.title).toLowerCase();
  next();
});

//Auto set the modified date prior to save
Article.pre('save', function(next){
  this.modified = new Date().toISOString();
  next();
});

Article.plugin(uniqueValidator);

module.exports  = mongoose.model('Article', Article);