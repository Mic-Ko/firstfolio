const   express     = require("express"),
        app         = express(),
        bodyParser  = require("body-parser"),
        mongoose    = require("mongoose")

// trzeba zmienic nazwe bazy danych na wybrana przez siebie, stworzy sie sama
mongoose.connect("mongodb://localhost/portfolio_v1", {useUnifiedTopology: true,
useNewUrlParser: true,});

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

