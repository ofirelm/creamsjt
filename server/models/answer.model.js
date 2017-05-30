var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: 'String', required: false },
    value: { type: 'Boolean', required: false }
});

module.exports = mongoose.model('Answer', schema);