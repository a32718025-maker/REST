const express=require("express");
const app= express();
const port=8080;
const path =require("path");//to use folders in index.js 

app.use(express.urlencoded({extended:true}));//This middleware parses form data sent through a POST request so you can access it using req.body.

app.set("view engine","ejs");  //set EJS as the view engine
app.set("views",path.join(__dirname,"ejs"));// Sets the folder where EJS files are stored, eg -- express searches for home.ejs inside the ejs folder

app.set(express.static(path.join(__dirname,"public"))); //this serves static files such as CSS,JavaScript and images from the public folder

app.get("/",(req,res)=>{
    console.log("server is running");
});



app.listen(port,()=>{
    console.log("listening to port:8080");
});