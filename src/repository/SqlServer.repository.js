'use strict'

const sql = require('mssql');
const dbConnection = require('../config/resources').dataSource; //mocks by the ugly proxyquire
class SqlServerRepository {

    constructor() {
        this.dataSource = dbConnection;
    }
    
    findAll(query) {
        return this._list(query); //interesting, 'this' is required here
    }

    _list(queryString, queryParams) {
        //need to do gymnastics to make a method private.
        //_ is a convention to make a method private
        var dataSource = this.dataSource;
        return new Promise(function (resolve, reject) {
            new sql.ConnectionPool(dataSource).connect()
                .then(pool => {
                    return pool.request()
                        //.input('input_parameter', sql.Int, value)
                        .query(queryString);
                })
                .then(result => resolve(result.recordset))
                .catch(err => reject(err));
        });
    }
}

module.exports = { SqlServerRepository }