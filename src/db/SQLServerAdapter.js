'use strict'

var sql = require('mssql');
var config = {
    server: 'localhost\\SQLEXPRESS', //works
    database: 'frontsimple',//works
    user: 'LaborDb_app_user',
    password: 'LaborDb_app_user',
    port: 1433
};

function dbQuery(queryString){
sql.connect(config).then(pool => {
    // Query

    return pool.request()
    //.input('input_parameter', sql.Int, value)
    .query(queryString)
}).then(result => {
    console.dir(result)
}).catch(err => {
    console.log('error');
    console.log(err);
    throw err;
})

sql.on('error', err => {
    console.log('looks like global handler of error');
})
}

var db = {
    query: function(queryString){
        dbQuery(queryString);
    }
}
module.exports = db;