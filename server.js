
var h1bDAO = require('./src/h1b/H1bDAO.js');

function readDb2() {
    //10 ms auto save set now. check if it works
    h1bDAO.countNumberOfH1b('cap gemini')
        .then(result => console.log(result))
        .catch(err => console.error(err));

    h1bDAO.getAggregateForEmployer('CAPGEMINI AMERICA INC')
        .then(result => console.log(result))
        .catch(err => console.error(err));
}

readDb2();