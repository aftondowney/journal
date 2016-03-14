var Journal = require('./journal-entry.js').Journal;
var prompt = require('prompt');
prompt.start();

prompt.get('entry', function(err, result) {
    console.log(result);
});
