var express = require("express");
var app = express();

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static("public"));

app.listen(3000,() => console.log("Server is listening on port 3000"));

app.get("/",(req,res) => {
    res.render("homepage");
});