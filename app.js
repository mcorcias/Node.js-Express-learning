const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

//Templating configuration
app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin.js');
const shopeRoutes=require('./routes/shop.js');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes.router);
app.use(shopeRoutes);



app.use((req,res,next)=>{
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.status(404).render('404',{pageTitle:'Page Not Found'});
})

app.listen(3000,()=>{
    console.log('Server connect on port 3000');
});