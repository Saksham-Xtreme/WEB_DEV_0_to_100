// const express = require("express");
// const app = express();
// let port = 3000;

// // app.listen(port, () =>{
// //     console.log(`app listen to ${port}`);
// // });


// // app.use((req, res) => {
// //     console.log(" request recieved");
// //     // res.send("This is a basic Response while learning express.js for backend");
// //     let code ="<h1>BACKEND LEARNING </h1> <ul><li>MAKING HTML</li> <li>Through backend</li></ul> ";
// //     res.send(code);

// // });


// app.get("/", (req, res)=>{
//     res.send("you contacted root path");
// });


// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });




// app.get("*", (req, res) => {
//     res.send("this path does not exist");
// });

// // console.dir(app);

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
});


app.get("/:username/:id", (req, res) => {
    let {username, id}= req.params;
    let htmlStr= `<h1> Welcome to Page of @${username}, ID: ${id} </h1>`;
    res.send(htmlStr);
});


app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send(`<h1> Nothing Searched </h1>`);
    }
    res.send(`<h1> search result for query : ${ q } </h1>`);
});



// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// // ✅ Correct 404 handler (must be last)
// app.use((req, res) => {
//     res.send("this path does not exist");
// });




