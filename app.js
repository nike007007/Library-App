const express = require('express');
const app = express();
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/signup',name:'SignUp'
    },
    {
        link:'/signin',name:'Signin'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter=require('./src/routes/authorRoutes')(nav)
const signupRouter=require('./src/routes/signupRoutes')(nav)
const signinRouter=require('./src/routes/signinRoutes')(nav)
const adminRouter=require('./src/routes/adminRoutes')(nav)

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);
app.use('/admin',adminRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});


    app.listen(5000);