class Note{
    constructor(t, c) {
        this.titre = t;
        this.contenu = c;
        this.date_creation = new Date();
    }

    setTitre(titre){
        this.titre = titre;
    }

    setContenu(contenu){
        this.contenu = contenu;
    }
}

class NoteView {
    constructor(note) {
        this.note = note
    }

    convert() {
        let conv = new showdown.Converter();
        let text = `# ${this.note.titre}
        ### ${this.note.date_creation.toLocaleDateString()}
        ${this.note.contenu}`
        let html = conv.makeHtml(text);
        return html;
    }

    afficher(html) {
        let div = document.querySelector("div#currentNoteView")
        let item = document.createElement("html");
        item.innerHTML = html
        div.appendChild(item)
    }
}

const noteFormView = {
    afficher() {
        document.querySelector('#noteForm').classList.remove("create_edit_note-hidden")
        let valider_button = document.querySelector("#form_add_note_valid")
        valider_button.addEventListener("click", noteFormView.valider)
    },
    cacher(){
        document.querySelector('#noteForm').classList.add("create_edit_note-hidden")
    },
    valider(){
        let titre = document.querySelector("#form_add_note_title").value,
            contenu = document.querySelector("#form_add_note_text").value

        noteapp.currentNote = new Note(titre, contenu);
        let noteView = new NoteView(noteapp.currentNote)
        noteView.afficher(noteView.convert())
        noteFormView.cacher()
    }
}

const mainMenuView = {
    createNoteHandler(){
        noteFormView.afficher()
    },
    init(){
        document.querySelector('#add').addEventListener("click", this.createNoteHandler)
    }
}

const noteapp = {
    currentNote : null,
    init() {
        mainMenuView.init()
    }
}

document.addEventListener("DOMContentLoaded", noteapp.init)