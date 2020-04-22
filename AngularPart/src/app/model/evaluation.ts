import { Competance } from "./competance";

export class Evaluation{
    //Attributs
    id: number;
    titre: string;
    date: Date;
    competancesEleveListe: number[][];

    //Méthodes
    constructor(titre: string, date: Date){
        this.id = 0;
        this.titre = titre;
        this.date = date;
        this.competancesEleveListe = [];
    }

    //Ajout d'une évaluation
    ajoutEvaluation(idCompetance: number, idEleve: number, note: number){
        this.competancesEleveListe.push([idCompetance, idEleve, note]);
    }
}