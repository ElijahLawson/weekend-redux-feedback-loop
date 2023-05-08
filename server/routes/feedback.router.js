const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback";')
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error GET /feedback', error);
        res.send(500);
    })
})

router.post('/', (req, res) => {
    const feedback = req.body;
    const sqlText = `INSERT INTO feedback 
        ("feeling", "understanding", "support", "comments")
        VALUES
        ($1, $2, $3, $4)
        `

    const sqlValues = [feedback.feelings, feedback.understanding, feedback.support, feedback.comments];

    console.log(sqlValues);

    pool.query(sqlText, sqlValues)
        .then(results => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('Error POST /feedback');
            res.sendStatus(500);
        })
})

module.exports = router;