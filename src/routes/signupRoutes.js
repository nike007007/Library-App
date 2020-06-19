const express = require('express');
const signupRouter = express.Router();

var signup = [signupRouter]



signupRouter.get('/',function(req,res){
    res.render("signup",{
        nav,
        title:'Library',
        signup
    });
});

signupRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('signup',{
        nav,
        title:'Library',
        signup: signup[id]
    });
});

return signupRouter;

}


module.exports = router;