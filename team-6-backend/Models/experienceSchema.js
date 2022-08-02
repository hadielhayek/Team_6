
const { Schema, model } = require('mongoose');

const ModelSchema = new Schema({
    title: String,
    date_start: Date,
    date_end:Date,
    location: [String],
    description: String } );

const Experience = model('Experience', ModelSchema);
module.exports = Experience;