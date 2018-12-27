'use strict'

var sql = require('mssql');
var config = {
    server: 'localhost\\SQLEXPRESS', //works
    database: 'frontsimple',//works
    user: 'LaborDb_app_user',
    password: 'LaborDb_app_user',
    port: 1433
};

function dbQueryWithPromise(queryString){

        return new Promise(function(resolve,reject){
            sql.connect(config)
            .then(pool => {
                                return pool.request()
                                //.input('input_parameter', sql.Int, value)
                                .query(queryString);
                            })
                            .then(result => resolve(result.recordset))
                            .catch(err => reject(err));

            console.log("Inside a promise");

        });
}

function dbQuery(queryString, callback){
    var resultSet;
    sql.connect(config).then(pool => {
        return pool.request()
        //.input('input_parameter', sql.Int, value)
        .query(queryString)
    }).then(result => {
        resultSet = result.recordset;
        console.dir(resultSet);
    }).catch(err => {
        console.log('error');
        console.log(err);
    })

    sql.on('error', err => {
        console.log('looks like global handler of error');
    })
}

var db = {
    query: dbQuery,
    queryWithPromise: dbQueryWithPromise
}
module.exports = db;