class NoteList {
    constructor() {
        this.tab = [];
        this.load();
    }

    addNote(note) {
        let id = this.tab.push(note);
        this.save();
        return id;
    }

    getNoteById(id) {
        console.log(id)
        console.log(this.tab[id])
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

    delete(){
        this.tab.splice(application.indexNoteCourante, 1)
        this.save()
    }

    edit(indice, titre, contenu){
        this.tab[indice].setTitre(titre)
        this.tab[indice].setContenu(contenu)
        this.save()
    }
}