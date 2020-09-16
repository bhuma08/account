const { response } = require('express');
const express = require('express');
const db = require('../db/config');
const { index, show, createCheese, shareCheese, shareAll } = require('../db/queries');

const router = express.Router();

router.get('/:userid/dashboard', (req, res) => {
    
    db.run(index, [req.params.userid])
    .then(resp => {
        const cheese = resp.rows
        res.json({cheese})
    })
    .catch(err => res.status(500).end())
});

//show one cheese route
router.get('/:userid/show/:id', (req,res) => {
    db.run(show, [req.params.id, req.params.userid])
        .then(resp => {
            const cheese = resp.rows
            res.json({cheese})
        })
        .catch(err=> res.status(500).end())
})

// Create new private cheese
router.post('/:userid/dashboard', (req, res) => {
    db.run(createCheese, [req.body.recipe, req.body.userid])
    .then(resp => {
        const cheese = resp.rows[0]
        res.status(201).json(cheese)
    })
    .catch(err => res.status(500).end())
})

router.get('/all', (req, res) => {
    db.run(shareAll)
    .then(resp => {
        const cheese = resp.rows
        res.json({cheese})
    })
    .catch(err => res.status(500).end())
});

//Post to public page
router.post('/all', (req, res) => {
    db.run(shareCheese, [req.body.recipe])
    .then(resp => {
        const cheese = resp.rows[0]
        res.status(201).json(cheese)
    })
    .catch(err => res.status(500).end())
})




module.exports = router;