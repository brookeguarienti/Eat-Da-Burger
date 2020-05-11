// import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        })
    },
    // the variables cols and vals are arrays
    create: function(addon, cb){
        orm.create("burgers", "burger_name", addon, function(res){
            cb(res);
        });
    },
    update: function(colVal, id, cb){
        orm.update(colVal, id, function(res){
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
