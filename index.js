const express=require("express");
const app= express();
const port=8080;
const path =require("path");//to use folders in index.js 

app.use(express.urlencoded({extended:true}));//This middleware parses form data sent through a POST request so you can access it using req.body.

app.set("view engine","ejs");  //set EJS as the template engine,express can render .ejs files using res.render
app.set("views",path.join(__dirname,"ejs"));// Sets the folder where EJS files are stored, eg -- express searches for home.ejs inside the ejs folder

app.use(express.static(path.join(__dirname,"public"))); //this serves static files such as CSS,JavaScript and images from the public folder

// const posts{}  nhi likha bcz we have to delete it too

let posts=[
    {
        username:"Anushka",
        content:"i am learning rest api !"
    },
    {
        username:"hobby",
        content:"i love doing sketching"
    },
{
        username:"entertainment",
        content:"i love watching bl dramas"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs");
});
app.get("/posts/new",(req,res)=>{

    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
    let{username,content}=req.body;
    posts.push({username,content});
    res.redirect("/posts");

});



app.listen(port,()=>{
    console.log("listening to port:8080");
});