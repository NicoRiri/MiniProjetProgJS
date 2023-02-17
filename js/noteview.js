class Noteview{
    constructor(note) {
        this.note = note;
    }
    conversion(){
        let conv = new showdown.Converter();
        let titre = conv.makeHtml("# "+this.note.titre)
        let date = conv.makeHtml("### "+this.note.date_creation.toLocaleString())
        let contenu = conv.makeHtml(this.note.contenu);
        return titre + date + contenu;
    }
    afficher(html){
        let spot = document.querySelector("#currentNoteView")
        if (spot.hasChildNodes()){
            spot.firstElementChild.remove()
        }
        let div = document.createElement("div");
        let ajout = document.createElement("html")
        ajout.innerHTML = html;
        div.appendChild(ajout);
        spot.appendChild(div);
    }
}