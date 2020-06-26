const express = require('express');
const signupRouter = express.Router();

function router(nav){
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            nav,
            title: 'library'
        })
    })

    signupRouter.post('/add',function(req,res){
        var item = {
        email: req.body.email,
        password: req.body.password,
        number: req.body.number
    }
    
    var signup = signupdata(item);
    signup.save();  //saving to database
    res.redirect('/signup'); 
    });

return signupRouter;

}


module.exports = router;