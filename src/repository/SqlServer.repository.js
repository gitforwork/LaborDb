'use strict'

const sql = require('mssql');
const dataSource = require('../config/resources').dataSource; //mocks by the ugly proxyquire
class SqlServerRepository {

    constructor() {
        this.dataSource = dataSource;
    }

    findAll(query) {
        return this.list(query); //interesting, 'this' is required here
    }

    list(queryString, queryParams) {
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