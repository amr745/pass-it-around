const express = require("express");
// const res = require("express/lib/response");
const app = express()
const port = 3000

// const zeroHome = <a href="https://localhost3000/">start over</a>;
// let lessBeer = <a href = "https://localhost3000/i">take one down, pass it around</a>;

app.get("/", (req,res) => {
    for (let i = 99; i > 0; i--) {
        if(i == 99) {
            res.send(`${i} Bottles of beer on the wall`)
        }
    }
});
    
    
    
    //     if (i == 0) {
    //         // res.send(zeroHome)
    //         res.send("stuff")
    //     } else {
    //             // res.send(lessBeer)
    //             res.send("more stuff")
    //         }
    //     }
    // });

app.listen(port, () => {
    console.log("listening on port", port)
});