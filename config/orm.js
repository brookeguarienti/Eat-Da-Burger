var connection = require("../config/connection");


var orm = {
    selectAll: function(tableName, cb){
        var queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(tableName, cols, vals, cb){
        var queryString = `INSERT INTO ${tableName} (${cols}) VALUES ('${vals}');`;

        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(tableName, colVal, boolean, colName, condition, cb){
        var queryString = `UPDATE ${tableName} SET ${colVal}=${boolean} WHERE ${colName}=${condition};`;
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
}

// export the orm object for the model (burger.js)
module.exports = orm;