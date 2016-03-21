module JournalEntry {
  export interface IEntry {
    title: string;
    body: string;
    entryDate: Date;
  }

  export class Entry implements IEntry {
    constructor(public title: string, public body: string, public entryDate: Date){}
    wordCount() {
      var bodyLength = this.body;
      return bodyLength.split(' ').length;
    }
    titleCheck() {
      if (this.title.length > 20){
        alert("Your Title is too long!");
      } else {
        return this.title;
      }
    }
    bodyCheck() {
      if (this.body.length > 500){
        alert("Your entry is too long!");
      } else {
        return this.body;
      }
    }
  }
}
