const mainMenuView = {
    addHandler(){
        NoteFormView.display()
    },
    del(){
        noteListMenuView.deleteInList()
    },
    edit(){

        NoteFormView.displayedit()
    },
    init(){
        document.querySelector("#add").addEventListener("click", this.addHandler)
        document.querySelector("#del").addEventListener("click", this.del)
        document.querySelector("#edit").addEventListener("click", this.edit)
    }
}