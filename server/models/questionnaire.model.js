var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = './question.model';
var ObjectId = Schema.ObjectId;

const schema = new Schema({
    title: { type: 'String', required: true },
    description: { type: 'String', required: true },
    questions: [{ type: ObjectId, ref: 'Question' }]
});

module.exports = mongoose.model('Questionnaire', schema);