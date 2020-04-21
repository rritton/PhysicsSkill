export class Joueur {
    //Attributs
    id: number;
    nom: string;
    prenom: string;
    role: string;

    //Méthodes
    constructor(nom: string, prenom: string, role: string){
        this.id = 0;
        this.nom = nom;
        this.prenom = prenom;
        this.role = role;
    }
}