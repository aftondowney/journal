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



$(document).ready(function(){

  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){

  $('#time').text(moment().format("MMM Do YYYY, h:mm a"));
});
