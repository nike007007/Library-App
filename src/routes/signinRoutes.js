const express = require('express');
const signinRouter = express.Router();

function router(nav){
    signinRouter.get('/',function(req,res){
        res.render('signin',{
            nav,
            title: 'library'
        })
    })
    
    signinRouter.post('/add',function(req,res){
        var item = {
        email: req.body.email,
        password: req.body.password
    }
    
    var signin = signindata(item);
    signin.save();  //saving to database
    res.redirect('/signin'); 
    });
return signinRouter;

}


module.exports = router;