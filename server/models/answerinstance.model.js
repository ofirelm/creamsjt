var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schema = new Schema({
    questionnaire: { type: ObjectId, ref: 'Questionnaire' },
    question: { type: ObjectId, ref: 'Question' },
    answer: [{ type: 'Boolean', required: true }]
});

module.exports = mongoose.model('AnswerInstance', schema);