const mainMenuView = {
    addHandler(){
        NoteFormView.display()
    },
    init(){
        document.querySelector("#add").addEventListener("click", this.addHandler)
    }
}