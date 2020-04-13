import { Eleve } from "./eleve";
import { Evaluation } from "./evaluation";

export class Groupe{
    id: number;
    nom: string;
    eleveList: Array<Eleve>;
    evaluationListe: Array<Evaluation>;
}

export const classes501: Groupe = 
    {
        id: 1,
        nom: '502',
        eleveList: [],
        evaluationListe: []
    };