class Noteview{
    constructor(note) {
        this.note = note;
    }
    conversion(){
        // let markdownText = `# ${this.note.titre}
        // ### ${this.note.date_creation.toLocaleDateString()}
        // ${this.note.contenu}`
        let conv = new showdown.Converter();
        let titre = conv.makeHtml("# "+this.note.titre)
        let date = conv.makeHtml("### "+this.note.date_creation.toLocaleString())
        let contenu = conv.makeHtml(this.note.contenu);
        let htmlText = titre+date+contenu
        return htmlText;
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