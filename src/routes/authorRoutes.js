const express = require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            author:'Jon Culshow',
            img:"jon.jpg"
        },
        {
            author:'Jack Covert,Todd Sattersten',
            img:"jack.jpg"
        },
        {
            author:'Smitha Singh',
            img:"smitha.jpg"
        },
        {
            author:'Siddhanta Pinto',
            img:"siddhanta.jpg"
        },
        {
            author:'Abby Craden',
            img:"abby.jpg"
        },
        {
            author:'Gerard I.Nierenberg,Henry H.Calero',
            img:"gerard.jpg"
        }
    ]

    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author: authors[id]
        });
    });

    return authorsRouter;
    
}


module.exports = router;