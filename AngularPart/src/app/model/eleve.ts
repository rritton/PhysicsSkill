import { Joueur } from "./joueur";
import { Lvl, lvl1 } from "./lvl";
import { Evaluation } from "./evaluation";
import { CompetanceEleve, sappropier, analyser, realiser, valider, communiquer, connaitre, charisme } from "./competance";
import { Groupe, classes501 } from "./classe";

export class Eleve extends Joueur{
    xp: number;
    lvl: Lvl;
    evaluationsListe: Array<Evaluation>;
    competancesListe: Array<CompetanceEleve>;
    classe: Groupe;
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
