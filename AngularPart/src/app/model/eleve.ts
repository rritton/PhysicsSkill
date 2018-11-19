import { Joueur } from "./joueur";
import { Lvl, lvl1 } from "./lvl";
import { Evaluation } from "./evaluation";
import { CompetanceEleve } from "./competance";

export class Eleve extends Joueur{
    xp: number;
    lvl: Lvl;
    evaluationsListe: Array<Evaluation>;
    competancesListe: Array<CompetanceEleve>;
}

export const eleve1: Eleve = 
    {
        id: 3,
        nom: 'Dufour',
        prenom: 'Amélie',
        role: 'Eleve',
        xp: 0,
        lvl: lvl1,
        evaluationsListe: [],
        competancesListe: [],
    };
