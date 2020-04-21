import { Joueur } from "./joueur";
import { Groupe } from "./classe";

export class Prof extends Joueur{
    //Attributs suplémentaires
    motDePasse: string;
    groupes: Array<Groupe>;

    //Méthodes
    constructor(nom: string, prenom: string, motDePasse: string){
        super(nom, prenom, 'Prof');
        this.motDePasse = motDePasse;
        this.groupes = [];
    }
}


// Simulation
export const prof1: Prof = 
    {
        id: 1,
        nom: 'Mendonça',
        prenom: 'Lucille',
        role: 'Prof',
        motDePasse: 'blabla',
        groupes: [],
    };

export const prof2: Prof = 
    {
        id: 2,
        nom: 'Daudé',
        prenom: 'Barthélémy',
        role: 'Prof',
        motDePasse: 'blabla',
        groupes: [],
    };