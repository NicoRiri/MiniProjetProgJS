class Note{
    constructor(titre, contenu) {
        this.titre = titre;
        this.contenu = contenu;
        this.date_creation = new Date();
    }
    setTitre(titre){
        this.titre = titre;
    }
    setContenu(contenu){
        this.contenu = contenu;
    }
}
