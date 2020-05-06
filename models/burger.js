// import the ORM to create functions that will interact with the database
var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        })
    },
    // the variables cols and vals are arrays
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(colVal, boolean, cb){
        orm.update("burgers", colVal, boolean, function(res){
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
