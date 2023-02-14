class NoteList{
    constructor() {
        this.tab = [];
    }
    addNote(note){
        return this.tab.push(note);
    }
    getNoteById(id){
        return this.tab.at(id);
    }
    getList(){
        return this.tab;
    }

}