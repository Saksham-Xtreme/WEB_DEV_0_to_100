const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



// to create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'saksham@123'
});


let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// home page route
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user `;
    try{
        connection.query(q, (err, users) => {
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { users });
        });
    } catch(err) {
        res.send("some error occured");
    }
});

// show user route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try{
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("users.ejs", { users });
        });
    } catch(err){
        console.error(err);
        res.send("Database error");
    }
   
});

// Edit route
app.get("/user/:id/edit" , (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}' `;
    
    try{
        connection.query(q, (err, result) => {
            if (err) throw err;
                
            
            let user= result[0];
            res.render("edit.ejs", { user });
        });  
    } catch(err){
        console.error(err);
    
        res.send("Database error");
    }
    
});


// update Route

app.patch("/user/:id" , (req, res) => {
    let { id } = req.params;

    let q = `SELECT * FROM user WHERE id = '${id}' `;
    let {password : formPass, username: newUsername} = req.body;
    try{
        connection.query(q, (err, result) => {
            if (err) throw err;
                
            
            let user= result[0];
            if(formPass != user.password){
                res.send("Wrong Password");
            } else{
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id = '${id}' `;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
            
        });  
    } catch(err){
        console.error(err);
    
        res.send("Database error");
    }
    
})


app.listen("8080", () => {
    console.log("Port 8080 is starting ");

});



// let q = "SHOW TABLES ";

// now with placeholders

// let q = "INSERT INTO `user` (id, username, email, password) VALUES ?";

// let data = [];

// for(let i=0; i<100;i++){
//     data.push(getRandomUser());
// }

// let users = [
//             ["123a", "123_newusera", "abac@gmail.com", "aabc"],
//             ["123b", "123_newuserb", "abbc@gmail.com", "abbc"]
// ];
// try {
//     connection.query( q , [data],  (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         console.log(result[0]);
//         console.log(result.length);
//         console.log(result[1]);
//     });
// } catch( err){
//     console.log(err);
// }

// connection.end();