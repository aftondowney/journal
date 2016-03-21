var JournalEntry;
(function (JournalEntry) {
    var Entry = (function () {
        function Entry(title, body, entryDate) {
            this.title = title;
            this.body = body;
            this.entryDate = entryDate;
        }
        Entry.prototype.wordCount = function () {
            var bodyLength = this.body;
            return bodyLength.split(' ').length;
        };
        Entry.prototype.titleCheck = function () {
            if (this.title.length > 20) {
                alert("Your Title is too long!");
            }
            else {
                return this.title;
            }
        };
        Entry.prototype.bodyCheck = function () {
            if (this.body.length > 500) {
                alert("Your entry is too long!");
            }
            else {
                return this.body;
            }
        };
        return Entry;
    }());
    JournalEntry.Entry = Entry;
})(JournalEntry || (JournalEntry = {}));
