(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Journal = function(title, entryDate, content) {
  this.title = title;
  this.entryDate = entryDate;
  this.content = content;
}

  exports.Journal.prototype.wordCount = function() {
    var content = this.content;
    return content.split(' ').length;
  }

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal-entry.js').Journal;

$(document).ready(function() {

  $("form#journalEntry").submit(function(event) {
    event.preventDefault();
    var inputTitle = $('input#title').val();
    var inputEntryDate = $('input#entryDate').val();
    var inputContent = $('input#content').val();
    var newEntry = new Journal(inputTitle, inputEntryDate, inputContent);
    var inputWordCount = newEntry.wordCount(content);

    console.log(newEntry.dateFormat());

      $("#entry").append("<li>" + inputTitle + "</li><ul><li>" +  inputEntryDate + "</li> <li>" + inputContent + "</li> <li>" +"Word Count: " + inputWordCount);

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

},{"./../js/journal-entry.js":1}]},{},[2]);