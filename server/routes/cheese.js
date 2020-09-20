const { response } = require('express');
const express = require('express');
const db = require('../db/config');
const { index, show, createCheese, shareCheese, shareAll } = require('../db/queries');
const jwt = require('jsonwebtoken');


const router = express.Router();

const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}

router.get('/:userid/dashboard', checkToken, (req, res) => {
 
    jwt.verify(req.token, 'privatekey', (err) => {
        if(err){
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            //If token is successfully verified, we can send the autorized data 
                    db.run(index, [req.params.userid])
                    .then(resp => {
                    const cheese = resp.rows
                    res.json({cheese})
                    })
                    .catch(err => res.status(500).end())

            console.log('SUCCESS: Connected to protected route');
        }
    })
})


// router.get('/:userid/dashboard', authenticateToken, (req, res) => {
    
//     db.run(index, [req.params.userid])
//     .then(resp => {
//         const cheese = resp.rows
//         res.json({cheese})
//     })
//     .catch(err => res.status(500).end())
// });

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