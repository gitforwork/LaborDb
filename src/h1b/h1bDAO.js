'use strict'

var mssqlAdapter = require('../db/SQLServerAdapter.js');//import can be used instead
module.exports = {
    countNumberOfH1b: countNumberOfH1b
};

function countNumberOfH1b(employer) {
    return new Promise(function (resolve, reject) {
        mssqlAdapter.queryWithPromise('select count(*) count from dbo.H1b')
            .then(result => resolve(result[0].count))
            .catch(err => reject(err));
    });
}