const sql = require('mssql')

function dbConnect(){
var config = {
    server: 'localhost\\SQLEXPRESS', //works
    database: 'frontsimple',//works
    user: 'LaborDb_app_user',
    password: 'LaborDb_app_user',
    port: 1433
};

sql.connect(config).then(pool => {
    // Query

    return pool.request()
    //.input('input_parameter', sql.Int, value)
    .query('select top 100 * from dbo.H1B')
}).then(result => {
    console.dir(result)
}).catch(err => {
    console.log('error');
    console.log(err);
})

sql.on('error', err => {
    console.log('looks like global handler of error');
})
}

dbConnect();