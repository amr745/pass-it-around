const express = require("express");
// const res = require("express/lib/response");
const app = express()
const port = 3000

app.get("/", (req,res) => {
    for (let i = 99; i >= 0; i--) {
        // console.log(i)
        if (i == 0) {
        res.send(`<a href=${"http://localhost:3000/"}>start over</a>`)
        // console.log(`<a href=${"https://localhost3000/"}>start over</a>`)
    } else {
        const count = i-1
        res.send(`${i} Bottles of beer on the wall <a href=${"http://localhost:3000/"}>take one down pass it around<a>`)
        }
    }
});

app.listen(port, () => {
    console.log("listening on port", port)
});