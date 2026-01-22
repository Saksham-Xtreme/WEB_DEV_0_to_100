const express= require("express");
const app = express();
const path= require("path");
const port = 8080;



app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("this is home");
    res.render("home"); 
});


app.get("/rolldice", (req, res) => {
    // res.send("this is home");
    let dice = Math.floor(Math.random()*6)+1;
    res.render("rolldice" , {dice}); 
});




app.get("/ig/:username", (req, res) => {
    // res.send("this is home");
    // const followers = ["adam", "bob", "charlie"];
    // let { username } = req.params;
    // console.log(username);
    // res.render("instagram", {username, followers});
    let { username } = req.params;
    const instaData = require("./data.json");

    const data = instaData[username] ;
    if(data){
        res.render("instagram.ejs", { data });
    } else{
        res.render("error.ejs");
    }
    console.log(data);
    
});




 

app.listen(port, () => {
    console.log(`app listen on port ${port}`);
});
