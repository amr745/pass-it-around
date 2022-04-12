const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send(`99 Bottles of beer on the wall <a href=${"http://localhost:3000/99"}>take one down pass it around<a>`);
});

app.get("/:number_of_bottles", (req,res) => {
    const numberBottle = req.params.number_of_bottles;
    const newBottle = parseInt(numberBottle) -1;
        if (numberBottle == 1) {
        res.send(`${newBottle} Bottles of beer on the wall <a href=${"http://localhost:3000/"}>start over</a>`);
    } else {
        res.send(`${newBottle} Bottles of beer on the wall <a href=${"http://localhost:3000/"}${newBottle} >take one down pass it around<a>`);
    }
});

app.listen(port, () => {
    console.log("listening on port", port)
});