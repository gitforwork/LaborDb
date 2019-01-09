
var lca = require('./src/h1b/LCA.js');
const FileGenerator = require('./src/filegen/Pug.FileGenerator.js').FileGenerator

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

function generateFile() {
    const fileGen = new FileGenerator();
    fileGen.renderFile('src/h1b/markupTemplate.pug', {
        name: 'Raven'
    });
}

//readDb2();
generateFile();
