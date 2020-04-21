import { Eleve, eleve1 } from "./eleve";
import { Evaluation } from "./evaluation";
import { Lvl, lvl0, lvl1 } from "./lvl";

export class Groupe{
    //Attributs
    id: number;
    nom: string;
    lvlListe: Array<Lvl>;
    eleveListe: Array<Eleve>;
    evaluationListe: Array<Evaluation>;

    //Méthodes
    constructor(nom: string, lvlListe: Array<Lvl>, eleveListe: Array<Eleve>){
        this.id = 0;
        this.nom = nom;
        this.lvlListe = lvlListe;
        this.eleveListe = eleveListe;
        this.evaluationListe = [];
    }

    //Ajout d'un lvl
    ajoutLvl(lvl: Lvl){
        this.lvlListe.push(lvl);
    }

    //Ajout d'un élève
    ajoutEleve(eleve: Eleve){
        this.eleveListe.push(eleve);
    }

    //Ajout d'une évaluation
    ajoutEval(evaluation: Evaluation){
        this.evaluationListe.push(evaluation);
    }
}

export const classes501: Groupe = 
    {
        id: 1,
        nom: '502',
        lvlListe: [lvl0, lvl1],
        eleveListe: [eleve1],
        evaluationListe: [],
    };