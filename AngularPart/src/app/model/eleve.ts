import { Joueur } from "./joueur";
import { Lvl, lvl1 } from "./lvl";
import { Evaluation } from "./evaluation";
import { CompetanceEleve, sappropier, analyser, realiser, valider, communiquer, connaitre, charisme } from "./competance";
import { Groupe, classes501 } from "./classe";

export class Eleve extends Joueur{
    //Attributs suplémentaires
    classe: Groupe;
    competancesListe: Array<CompetanceEleve>;
    xp: number;
    lvl: Lvl;
    evaluationsListe: Array<Evaluation>;

    //Méthodes
    constructor(nom: string, prenom: string, classe: Groupe){
        super(nom, prenom, 'Eleve');
        this.classe = classe;
        //this.competancesListe = classe.
        this.xp = 0;
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
