'use strict'
const pug = require('pug');

function FileGenerator() { //ES5 Constructor
    this.renderFile = (templateFile, data) => { 
        const loadTemplate = pug.compileFile(templateFile);
        console.log(loadTemplate(data));
    }

    function sayHello() {
        //private method, not possible in es6
        return 'hello';
    }
}

module.exports = {
    FileGenerator
}