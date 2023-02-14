const noteListMenuView = {
    initList: function(notes) {
        let selector= document.querySelector("#noteListMenu");
        selector.innerHTML = '';
        notes.forEach(note => this.displayItem(note));
    },

    displayItem: function(note) {
        let element = document.querySelector("#noteListMenu");
        let div = document.createElement("div");
        div.classList.add("note_list_item");
        let textNode = document.createTextNode(note.titre + " " + note.date_creation.toLocaleDateString());
        div.appendChild(textNode);
        div.addEventListener("click", function() {
            let noteView = new Noteview(note);
            noteView.afficher(noteView.conversion())
        });
        element.appendChild(div);
    }
};

let spot = document.querySelector("#noteListMenu");
spot.addEventListener("click", function (e) {
    console.log(e.target);
    let i = 0;
    for (const child of e.currentTarget.children) {
        if (child === e.target) {
            console.log("ok");
            console.log(i);
            application.indexNoteCourante = i;
            application.noteCourante = application.noteList.getNoteById(i);
            let nv = new Noteview(application.noteCourante);
            nv.afficher(nv.conversion())
            break;
        } else {
            i++;
        }
      }
    }
)
