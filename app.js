var PORT = process.env.PORT || 3000;
var express = require("express");
var app = express();
var request = require("request");
app.use(express.static("public"));


app.get("/result",function(req,res){
    var query = req.query.title;
    var url = "http://omdbapi.com/?s="+query+"&apikey=thewdb";
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("result.ejs",{data : data});
        }
    });
});
app.get("/",function(req,res){
    res.render("home.ejs");
});



app.listen(PORT,function(){
    console.log("Movie app has started!!!");
});