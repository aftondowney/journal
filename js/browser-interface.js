var Journal = require('./../js/journal-entry.js').Journal;
var moment = require('moment');

$(document).ready(function() {

  $("form#journalEntry").submit(function(event) {
    event.preventDefault();
    var inputTitle = $('input#title').val();
    var inputEntryDate = moment().format("MM-DD-YYYY");
    var inputContent = $('input#content').val();
    var newEntry = new Journal(inputTitle, inputEntryDate, inputContent);
    var inputWordCount = newEntry.wordCount(content);


      $("#entry").append("<li>" + inputTitle + "</li><ul><li>" + inputEntryDate + "</li> <li>" + inputContent + "</li> <li>" +"Word Count: " + inputWordCount);

  });
});
