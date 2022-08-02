const { Schema, model } = require('mongoose');

const ModelSchema = new Schema({
    dateFeedback: Date,
    text: String,
    visitorFirstName: String,
    visitorLastName: String,
    visitorImage: String,
    active: Boolean } );

const Feedback = model('Feedback', ModelSchema);
module.exports = Feedback;