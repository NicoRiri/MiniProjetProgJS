const noteListMenuView = {
    displayItem(note) {
        let spot = document.querySelector("#noteListMenu");
        let div = document.createElement("div");
        div.classList.add("note_list_item");
        let text = document.createTextNode(note.titre + " " + note.date_creation.toLocaleDateString());
        div.appendChild(text);
        spot.appendChild(div);
    },
}

let spot = document.querySelector("#noteListMenu");
spot.addEventListener("click", function (e) {
    console.log(e.target);
    let i = 0;
    for (const child of e.currentTarget.children) {
        if (child == e.target) {
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
        /*
        if (note.titre + " " + note.date_creation.toLocaleDateString() == e.target) {
            console.log("ok");
            application.noteCourante = note;
            let nv = new Noteview(note);
            nv.afficher(nv.conversion())
        }
        */
})
