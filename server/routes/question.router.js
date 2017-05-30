const express = require('express');
const router = express.Router();
const Question = require('../models/question.model');

router.use('/:questionId', function(req, res, next) {
    Question.findById(req.params.questionId, function(err, document) {
        if (err) {
            res.status(500).send(err);
        }
        else if (document) {
            req.document = document;
            next();
        }
        else {
            res.status(404).send('No document matching the specified ID found');
        }
    })
})

router.get('/', function(req, res) {
    Question.find(function(err, questions) {
        if (err)
            res.status(500).send(err);

        res.json(questions);
    });
});

router.post('/', function(req, res) {
    if (!req.body) {
        res.status(403).end();
    }

    let newQuestion = new Question(req.body);
    newQuestion.save((err, saved) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ question: saved });
    });
});

router.get('/:questionId', function(req, res) {
    var returnDocument = req.document.toJSON();
    res.json(returnDocument);
})

router.delete('/:questionId', function(req, res) {
    Question.findByIdAndRemove(req.params.questionId, function(err) {
        if (err)
            res.status(500).send(err);
        else
            res.json({ message: 'Question Deleted!' });
    });
});

module.exports = router;