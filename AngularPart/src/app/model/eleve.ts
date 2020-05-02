import { Joueur } from "./joueur";
import { Evaluation } from "./evaluation";
import { Competance, sappropier, analyser, realiser, valider, communiquer, connaitre, charisme } from "./competance";

export class Eleve extends Joueur{
    //Attributs suplémentaires
    evaluationsListe: Array<Evaluation>;
    competanceListe: Array<Competance>;

    //Méthodes
    constructor(nom: string, prenom: string){
        super(nom, prenom, 'Eleve');
        this.evaluationsListe = [];
        this.competanceListe = [];
        this.competanceListe.push(new Competance("s'appropier"));
        this.competanceListe.push(new Competance("analyser"));
        this.competanceListe.push(new Competance("réaliser"));
        this.competanceListe.push(new Competance("valider"));
        this.competanceListe.push(new Competance("communiquer"));
        this.competanceListe.push(new Competance("connaitre"));
        this.competanceListe.push(new Competance("charisme"));
    }

}

export const eleve1: Eleve = 
    {
        id: 3,
        nom: 'Dufour',
        prenom: 'Amélie',
        role: 'Eleve',
        evaluationsListe: [],
        competanceListe: [sappropier, analyser, realiser, valider, communiquer, connaitre, charisme],
    };
