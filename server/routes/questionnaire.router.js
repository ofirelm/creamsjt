const express = require('express');
const router = express.Router();
const Questionnaire = require('../models/questionnaire.model');

router.use('/:questionnaireId', function(req, res, next) {
    Questionnaire.findById(req.params.questionnaireId, function(err, document) {
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
    Questionnaire.find(function(err, questionnaires) {
        if (err)
            res.status(500).send(err);

        res.json(questionnaires);
    });
});

router.post('/', function(req, res) {
    if (!req.body) {
        res.status(403).end();
    }

    let newQuestionnaire = new Questionnaire(req.body);
    newQuestionnaire.save((err, saved) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ questionnaire: saved });
    });
});

router.get('/:questionnaireId', function(req, res) {
    var returnDocument = req.document.toJSON();
    res.json(returnDocument);
})

router.delete('/:questionnaireId', function(req, res) {
    Questionnaire.findByIdAndRemove(req.params.questionId, function(err) {
        if (err)
            res.status(500).send(err);
        else
            res.json({ message: 'Question Deleted!' });
    });
});

module.exports = router;