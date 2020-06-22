const   express     = require("express"),
        app         = express(),
        bodyParser  = require("body-parser");



app.set("view engine", "ejs");

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/resume", function(req, res){
	res.render("resume");
});



app.listen(process.env.PORT, process.env.IP, function(){
	console.log("yelpcamp server started!")
});