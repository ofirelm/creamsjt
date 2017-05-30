var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: 'String', required: false },
    description: { type: 'String', required: false },
    video: { type: 'String', required: false },
    attachment: { type: 'String', required: false },
    answers: [{ type: 'String', required: false }]
});

module.exports = mongoose.model('Question', schema);