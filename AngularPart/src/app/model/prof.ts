import { Joueur } from "./joueur";
import { Groupe } from "./classe";

export class Prof extends Joueur{
    motDePasse: String;
    groupes: Array<Groupe>;
}

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