const express = require("express")
const app = express();

app.get("/", (req, res) => {

    res.send("Hello");
});

app.listen(4500, () => {
    console.log('listening at port 4500');
})