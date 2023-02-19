const noteListMenuView = {
    initList: function(notes) {
        let selector= document.querySelector("#noteListMenu");
        selector.innerHTML = '';
        notes.forEach(note => this.displayItem(note));
        for (let i = 0; i < selector.children.length; i++) {
            selector.children.item(i).classList.remove("note_list_item-selected")
        }
    },

    displayItem: function(note) {
        let element = document.querySelector("#noteListMenu");
        let div = document.createElement("div");
        for (let i = 0; i < element.children.length; i++) {
            element.children.item(i).classList.remove("note_list_item-selected")
        }
        div.classList.add("note_list_item");
        div.classList.add("note_list_item-selected");
        let textNode = document.createTextNode(note.titre + " " + note.date_creation.toLocaleDateString());
        div.appendChild(textNode);
        div.addEventListener("click", function() {
            let noteView = new Noteview(note);
            noteView.afficher(noteView.conversion())
        });
        element.appendChild(div);
    },

    deleteInList : function () {
        let element = document.querySelector("#noteListMenu");
        application.noteList.delete()
        element.children.item(application.indexNoteCourante).remove()
    },

    modifInList : function () {
        let element = document.querySelector("#noteListMenu");
        let note = application.noteList.getNoteById(application.indexNoteCourante)
        element.children.item(application.indexNoteCourante).textContent = (note.titre + " " + note.date_creation.toLocaleDateString())
    }
};

let spot = document.querySelector("#noteListMenu");
spot.addEventListener("click", function (e) {
    let i = 0;
    for (const child of e.currentTarget.children) {
        child.classList.remove("note_list_item-selected")
        if (child === e.target) {
            child.classList.add("note_list_item-selected")
            application.indexNoteCourante = i;
            let nv = new Noteview(application.noteList.getNoteById(i));
            nv.afficher(nv.conversion())
        } else {
            i++;
        }
      }
    }
)
