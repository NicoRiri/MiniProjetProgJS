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
        noteListMenuView.displayItem(note)
        let noteView = new Noteview(note);
        noteView.afficher(noteView.conversion());
        NoteFormView.hide();
    },

    displayedit(){
        document.querySelector("#noteForm").classList.remove("create_edit_note-hidden")
        document.querySelector("#form_add_note_title").value = application.noteList.getNoteById(application.indexNoteCourante).titre
        document.querySelector("#form_add_note_text").value = application.noteList.getNoteById(application.indexNoteCourante).contenu
        document.querySelector("#form_add_note_valid").addEventListener("click", this.validateedit)
    },

    validateedit(){
        let titre = document.querySelector("#form_add_note_title").value;
        let contenu = document.querySelector("#form_add_note_text").value;
        application.noteList.edit(application.indexNoteCourante, titre, contenu)
        noteListMenuView.modifInList()
        let nv = new Noteview(application.noteList.getNoteById(application.indexNoteCourante))
        nv.afficher(nv.conversion())
        NoteFormView.hide()

    }
}