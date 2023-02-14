class NoteList {
    constructor() {
        this.tab = [];
        this.load();
    }

    addNote(note) {
        let id = this.tab.push(note);
        this.save();
        return id - 1;
    }

    getNoteById(id) {
        return this.tab[id];
    }

    getList() {
        return this.tab;
    }

    save() {
        localStorage.setItem('noteList', JSON.stringify(this.tab));
    }

    load() {
        let notes = localStorage.getItem('noteList');
        if (notes) {
            let value = JSON.parse(notes);
            for (let note of value) {
                this.addNote(new Note(note.titre, note.contenu, new Date(note.date_creation)));
            }
            noteListMenuView.initList(this.tab);
        }
    }
}