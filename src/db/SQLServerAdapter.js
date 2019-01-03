'use strict'

var sql = require('mssql');
var config = {
    server: 'localhost\\SQLEXPRESS', //works
    database: 'frontsimple',//works
    user: 'LaborDb_app_user',
    password: 'LaborDb_app_user',
    port: 1433
};

function queryWithPromise(queryString) {

    return new Promise(function (resolve, reject) {
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

var db = {
    queryWithPromise: queryWithPromise
}

module.exports = db;