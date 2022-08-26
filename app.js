var express = require("express");
var app     = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/about", function(req, res) {
	res.render("about");
});


//app.listen(process.env.PORT, process.env.IP);
// go to http://localhost:8080
app.listen(process.env.PORT || 8080, function() {
    console.log("Server has started on port 8080");
})
