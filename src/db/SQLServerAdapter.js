'use strict'

var sql = require('mssql');
var config = {
    server: 'localhost\\SQLEXPRESS', //works
    database: 'frontsimple',//works
    user: 'LaborDb_app_user',
    password: 'LaborDb_app_user',
    port: 1433
};

function queryWithConnectionPool(queryString) {
    return new Promise(function (resolve, reject) {
        new sql.ConnectionPool(config).connect()
            .then(pool => {
                return pool.request()
                    //.input('input_parameter', sql.Int, value)
                    .query(queryString);
            })
            .then(result => resolve(result.recordset))
            .catch(err => reject(err));
    });
}

function queryWithPromise(queryString) {

    return new Promise(function (resolve, reject) {
        sql.connect(config)
            .then(pool => {
                return pool.request()
                    //.input('input_parameter', sql.Int, value)
                    .query(queryString);
            })
            .then(result => {
                resolve(result.recordset);
                sql.close();
            })
            .catch(err => {
                reject(err);
                sql.close();
            });

        console.log("Inside a promise");

    });
}

var db = {
    query: queryWithConnectionPool
}

module.exports = db;