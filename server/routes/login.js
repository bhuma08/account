const express = require('express');
const db = require('../db/config');
const { userEmail } = require('../db/queries');
const bcrypt = require('bcrypt');

const router = express.Router();


router.post('/',(req,res,next)=>{
    db.run(userEmail, [req.body.email])
    .then(resp =>{
        if(resp.rows[0]){
                bcrypt.compare(req.body.password, resp.rows[0].password) 
                .then((result)=>{
                if(result){
                    res.json({
                        id: resp.rows[0].userid,
                        message:"You've successfully logged in!"
                    })
                } else {
                    next(new Error ('Invalid username or password'))
                }
            })
            
        } else {
            next(new Error('Invalid Login'))
        }
    }).catch(err => res.status(500).end())
})

module.exports = router;