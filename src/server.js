console.log('Hello World!');

var sql = require('mssql');
//2.
var config = {
    server: 'localhost\\SQLEXPRESS', //works
    database: 'frontsimple',//works
    user: 'LaborDb_app_user',
    password: 'LaborDb_app_user',
    port: 1433
};

function loadEmployees2() {
    //4.
    sql.connect(config).then(function () {
            console.log('Connected!');
    });

     new sql.Request().query('select top 100 * from dbo.H1B', (err, result) => {
            //handle err
            if(err){
                console.log("Errored;");
                console.log(err);
            }

            console.dir(result)
            // This example uses callbacks strategy for getting results.
        })
};

function test(){

    sql.connect(config).then(function () {
            console.log('Connected!');
    });

    new sql.Request()
                        .query("select top 100 * from dbo.H1B")
                        .then(function (dbData) {
                            if (dbData == null || dbData.length === 0)
                                return;
                            console.dir('All the courses');
                            console.dir(dbData);
                        })
                        .catch(function (error) {
                            console.log('Caught Error');
                            console.dir(error);
                        });
}
function loadEmployees() {
    //4.
    sql.connect(config).then(function () {
        console.log('Connected!');
    });

};

function loadEmployees3(){
 //Query Database
        var connection = new sql.ConnectionPool(config, function(err){
            console.log('Connected');
        });
        var dbQuery = new sql.Request(connection);
        //Purposely we are delaying the results
        dbQuery.query("select top 100 * from dbo.H1B",function(err,resultset){
            //In case of an error print the error to the console. You can have your customer error handling
            if (err) console.log(err);
        });
}

loadEmployees2();