const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const errorController=require('./controllers/error');
const app=express();

//Templating configuration
app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin.js');
const shopeRoutes=require('./routes/shop.js');




app.use(bodyParser.urlencoded({extended:false}));

//public Folder for static files
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopeRoutes);



app.use(errorController.get404);

app.listen(3000,()=>{
    console.log('Server connect on port 3000');
});