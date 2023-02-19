const application = {
    noteList : new NoteList(),
    indexNoteCourante: null,
    init(){
        mainMenuView.init();
    }
}

document.addEventListener("DOMContentLoaded", application.init)