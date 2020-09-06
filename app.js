var express = require("express")
var app = express();
app.set("view engine","ejs");
app.use('/css', express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/public'));
app.get("/",function(req,res){
    res.render("home");
})
app.get("/game",function(req,res){
    res.render("game");
})
let port = process.env.PORT||3000;
app.listen(port);