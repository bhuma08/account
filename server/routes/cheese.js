const express = require('express');
const db = require('../db/config');
const { index, show, createCheese, createCheeseInstances } = require('../db/queries');

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

// Create new habit
router.post('/:userid/dashboard', (req, res) => {
    db.run(createCheese, [req.body.recipe, req.body.userid])
    .then(resp => {
        const cheese = resp.rows[0]
        // popHabIns(resp.rows[0].cheese_id)
        res.status(201).json(cheese)
    })
    .catch(err => res.status(500).end())
})

// Helper function to populate cheese_instance table for each
// const popHabIns = (habitID) => {
//      db.run(createCheeseInstances, [habitID])
// }

module.exports = router;