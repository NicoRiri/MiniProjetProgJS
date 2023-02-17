const NoteFormView = {
    display(){
        document.querySelector("#noteForm").classList.remove("create_edit_note-hidden")
        document.querySelector("#form_add_note_valid").addEventListener("click", this.validate)
    },
    hide(){
        document.querySelector("#noteForm").classList.add("create_edit_note-hidden")
    },
    validate(){
        let titre = document.querySelector("#form_add_note_title").value;
        let contenu = document.querySelector("#form_add_note_text").value;
        let note = new Note(titre, contenu);
        application.noteCourante = application.noteList.addNote(note);
        noteListMenuView.displayItem(note)
        let noteView = new Noteview(note);
        noteView.afficher(noteView.conversion());
        NoteFormView.hide();
    }
}