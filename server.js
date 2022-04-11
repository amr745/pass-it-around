const express = require("express");
// const res = require("express/lib/response");
const app = express()
const port = 3000

app.get("/", (req,res) => {
    res.send(`99 Bottles of beer on the wall <a href=${"http://localhost:3000/:number_of_bottles"}>take one down pass it around<a>`)
});

app.get("/:number_of_bottles", (req,res) => {
    for (let i = 98; i >= 0; i--) {
        // console.log(i)
        if (i == 0) {
        res.send(`<a href=${"http://localhost:3000/"}>start over</a>`)
        // console.log(`<a href=${"https://localhost3000/"}>start over</a>`)
    } else {
        // const number_of_bottles = i-1
        res.send(`${i} Bottles of beer on the wall <a href=${"http://localhost:3000/:number_of_bottles"}>take one down pass it around<a>`)
        }
    }
});

// app.get("/:number_of_bottles" (req,res) => {

// })

app.listen(port, () => {
    console.log("listening on port", port)
});