
const { Schema, model } = require('mongoose');

const ModelSchema = new Schema({
    date: Date, 
    description: String,
    title: String,
    image:String,
    link:String,
    active:Boolean } );

const Blog = model('Blogs', ModelSchema);
module.exports = Blog;