'use strict'

var db = require('../db/SQLServerAdapter.js');//import can be used instead
module.exports = {
    countNumberOfH1b: countNumberOfH1b,
    getAggregateForEmployer: getAggregateForEmployer
};

function countNumberOfH1b(employer) {
    return new Promise(function (resolve, reject) {
        db.query('select count(*) count from dbo.H1b')
            .then(result => resolve(result[0].count))
            .catch(err => reject(err));
    });
}

function getAggregateForEmployer(employer) {
    return new Promise(function (resolve, reject) {
        db.query(
            `select FISCAL_YEAR, count(case_number) case_number, AVG((WAGE_RATE_OF_PAY_FROM+WAGE_RATE_OF_PAY_TO)/2) AVG_WAGE 
            from dbo.H1B 
            where 
            EMPLOYER_NAME = '${employer}'
            group by FISCAL_YEAR
        ;`)
            .then(result => resolve(result[0]))
            .catch(err => reject(err));
    });
}