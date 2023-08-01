import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port=3000;

//Set Template Engine
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
let newTasks=[];

app.get('/',(req,res)=>{
    res.render('list',{newItems:newTasks});
})

app.post('/',(req,res)=>{
    let newTask = req.body.newTask;
    newTasks.push(newTask);
    res.redirect('/');
})



app.listen(port,()=>{
    console.log(`App listening to the port: ${port}`);
})