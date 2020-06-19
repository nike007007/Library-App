const express = require('express');
const signinRouter = express.Router();

var sighin = [signinRouter]


signinRouter.get('/',function(req,res){
    res.render("signin",{
        nav,
        title:'Library',
        signin
    });
});

signinRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('signin',{
        nav,
        title:'Library',
        signin: signin[id]
    });
});

return signinRouter;

}


module.exports = router;