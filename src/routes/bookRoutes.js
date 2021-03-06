const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    //var books = [
    //    {
    //        title:'A Beautiful Poetry of Donald Trump',
    //        author:'Jon Culshow',
    //        genre:'Poetry',
    //        img:"The beautiful poetry of Donald Trump.jpg"
    //    },
    //    {
    //        title:'The 100 Best Books of All Time',
    //        author:'Jack Covert,Todd Sattersten',
    //        genre:'Business,Money',
    //        img:"100 business.jpg"
    //    },
    //    {
    //        title:'Life is What You Make It',
    //        author:'Smitha Singh',
    //        genre:'Romance,Contemporary',
    //        img:"life.jpg"
    //    },
    //   {
    //        title:'The Girl In Room 105',
    //       author:'Siddhanta Pinto',
    //        genre:'Mysteries & Thrillers',
    //        img:"the girl.jpg"
    //    },
    //    {
    //        title:'101 Essays That Will Change the Way You Think ',
    //        author:'Abby Craden',
    //        genre:'Politics & Social Sciences',
    //        img:"101 essays.jpg"
    //    },
    //    {
    //        title:'How To Read A Person Like A Book',
    //        author:'Gerard I.Nierenberg,Henry H.Calero',
    //        genre:'Business,Money & Careers',
    //        img:"read a person.jpg"
    //    }
    //]
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
        });
        
        })
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id}) 
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book 
            });
        })
        
    });
    booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        var del = BookData.findByIdAndDelete(id);
        del.exec(function(err,data){
            if(err) throw err;
            res.redirect('/books');

        })
    });
    booksRouter.get('/edit/:id',function(req,res){
        const id = req.params.id;
        var edit = BookData.findById(id);
        edit.exec(function(err,data){
            if(err) throw err;
            res.redirect('/books');

        })
    });
    return booksRouter;
    
}


module.exports = router;