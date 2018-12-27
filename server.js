const sql = require('mssql')

var mssqlAdapter = require('./src/db/SQLServerAdapter.js');

function readDb() {
    var results = mssqlAdapter.query('select top 1 * from dbo.H1B');
    console.dir(results);
}

function readDb() {
    mssqlAdapter.queryWithPromise('select top 1 * from dbo.H1B')
        .then(result => console.log(result))
        .catch(err => console.error(err));
}

readDb();