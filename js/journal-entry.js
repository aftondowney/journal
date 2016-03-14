exports.Journal = function(title, entryDate, content) {
  this.title = title;
  this.entryDate = entryDate;
  this.content = content;
}

  exports.Journal.prototype.wordCount = function() {
    var content = this.content;
    return content.split(' ').length;
  }
