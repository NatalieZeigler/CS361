import 'dotenv/config';
import * as questions from './trivia_model.mjs';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

/**
 * Create a new question with the question contents and viewed boolean 
 */


app.post('/questions', (req, res) => {
    questions.createQuestion(req.body.questionText, req.body.viewed)
    .then(question => {
        res.status(201).json(question);
    })
    .catch(error => {
        console.error(error);
        res.status(400).json({Error: 'Request failed to create a question'});
    })
});


/**
 * Retrive the exercise corresponding to the ID provided in the URL.
 */
app.get('/questions/:_id', (req, res) => {
    const questionID = req.params._id;
    questions.findQuestionbyID(questionID)
        .then(question => {
            if (question !== null) {
                res.json(question);
            } else {
                res.status(404).json({Error: 'Resource not found'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Request failed to find question by ID'});
        })
});

/**
 * Retrieve exercises. 
 * 
 */
app.get('/questions', (req, res) => {
    let filter = {};
    questions.findQuestions(filter, '', 0)
        .then(questions => {
            res.send(questions);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request failed' });
        });
});

/**
 * Update the exercise whose id is provided in the path parameter and set
 * 
 */
app.put('/questions/:_id', (req, res) => {
    questions.replaceQuestion(req.params._id, req.body.question, req.body.viewed)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, question: req.body.question, viewed: req.body.viewed})
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

/**
 * Delete the exercise whose id is provided in the query parameters
 */
app.delete('/questions/:_id', (req, res) => {
    questions.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});