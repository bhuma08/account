const express = require('express');
const db = require('../db/config');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const router = express.Router();

const { insertUser, userIndex } = require('../db/queries');

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

router.get('/', checkToken, (req, res) => {
 
    jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
        if(err){
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            //If token is successfully verified, we can send the autorized data 
            res.json({
                message: 'Successful log in',
                authorizedData
            });
            console.log('SUCCESS: Connected to protected route');
        }
    })
})

//sign Up
router.post('/', (req, res) => {

    bcrypt.hash(req.body.password, saltRounds).then(function(hash){

        db.run(insertUser, [req.body.email, hash])
        .then(result => {
            const users = result.rows[0]
            res.status(201).json(users)
        })
        .catch(err => res.status(500).end())

    })
    
            
}) 

module.exports = router;