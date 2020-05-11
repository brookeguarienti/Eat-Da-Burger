var express = require("express");

var router = express.Router();

// import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
   var allBurger = { burgers: data};
   res.render("index", allBurger);
});
});

router.post("/create", function(req,res){
    console.log(req.body);
    
    burger.create(req.body.burger_name, function (addon){
        res.redirect("/")
    });
});

router.post("/update/:id", function(req, res) {
    var colVal = "id";
    var id = req.params.id;

    burger.update(colVal, id, function(){
        res.redirect("/");
    });
});


// export routers for server.js to use
module.exports = router;
