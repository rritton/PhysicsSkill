import { Joueur } from "./joueur";
import { Lvl, lvl1 } from "./lvl";
import { Evaluation } from "./evaluation";
import {  } from "./competance";
import { Groupe, classes501 } from "./classe";

export class Eleve extends Joueur{
    //Attributs suplémentaires
    classe: Groupe;
    evaluationsListe: Array<Evaluation>;

    //Méthodes
    constructor(nom: string, prenom: string, classe: Groupe){
        super(nom, prenom, 'Eleve');
        this.classe = classe;
    }
}

export const eleve1: Eleve = 
    {
        id: 3,
        nom: 'Dufour',
        prenom: 'Amélie',
        role: 'Eleve',
        xp: 47,
        lvl: lvl1,
        evaluationsListe: [],
        competancesListe: [sappropier, analyser, realiser, valider, communiquer, connaitre, charisme],
        classe: classes501
    };
