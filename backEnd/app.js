//using express
const express=require('express');
const app =express();

const userRouter=require('./routes/UserRoutes');
const User=require('./model/User.js');


const mongoose=require('mongoose');
var cors = require('cors');
const dbPath = 'mongodb+srv://alaa:1234@cluster0.6ulyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;
mongoose.connect(dbPath).then((result)=>console.log('connected to DB'))
.catch((err)=>console.log(err));

app.use(cors());

app.get('/',(req,res)=>
{
    res.send('Hello world');
    res.end();
});

app.use('/users',userRouter);


app.listen(8000);
console.log("Back-end Listening on port 8000");











