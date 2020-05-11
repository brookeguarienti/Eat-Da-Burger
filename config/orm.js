var connection = require("../config/connection.js");

var orm = {
    all: function(tableName, cb){
        var queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    create: function(tableName, cols, vals, cb){
        var queryString = `INSERT INTO ${tableName} (${cols}) VALUES ('${vals}');`;

        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    update: function(colVal, id, cb){
        var queryString = `UPDATE burgers SET devoured="1" WHERE ${colVal}=${id};`;
        connection.query(queryString, [id], function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
}

// export the orm object for the model (burger.js)
module.exports = orm;
