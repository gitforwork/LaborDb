
var lca = require('./src/h1b/LCA.js');

function readDb2() {
    //10 ms auto save set now. check if it works
    lca.countNumberOfH1b('cap gemini')
        .then(result => console.log(result))
        .catch(err => console.error(err));

    lca.getAggregateForEmployer('CAPGEMINI AMERICA INC')
        .then(result => console.log(result))
        .catch(err => console.error(err));
    
    lca.getAggregateForEmployerByTitle('CAPGEMINI AMERICA INC')
        .then(result => console.log(result))
        .catch(err => console.error(err));
}

readDb2();