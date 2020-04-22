export class Competance{
    //Attributs
    id: number;
    nom: string;
    evaluationListe: number[][];

    //Méthodes
    constructor(nom: string){
        this.id = 0;
        this.nom = nom;
        this.evaluationListe = [];
    }

    //Ajout d'une évaluation de la compétance
    adEvaluation(idEvaluation: number, note: number){
        this.evaluationListe.push([idEvaluation,note]);
    }

    //Récupération de l'xp total lié à la compétance
    getXP(){
        let xp: number;
        xp = 0;
        for (let evaluation of this.evaluationListe) {
            if(evaluation[1]>=0) {
                xp += evaluation[1];
            }
        }
        return xp;
    }

    //récupération du nombre de fois où la compétance a été évaluée
    getPoid(){
        let nb: number;
        nb = 0;
        for (let evaluation of this.evaluationListe) {
            if(evaluation[1]>=0) { //Les valeurs négatives servent pour les fois où elle aurait dû mais elle n'a pas été évaluée
                nb ++;
            }
        }
        return nb;
    }

    //Calcul de la moyenne
    getMoyenne(){
        return this.getXP()/this.getPoid();
    }
}


export enum CompetanceValeur{
    NonEvalue = -2,
    Abs = -1,
    A = 6,
    B = 3,
    C = 1,
    D = 0
}


export const sappropier: Competance = 
    {
        id: 1,
        nom: 'S\'appropier',
        evaluationListe: [[1, 6], [2,6]]
    };

export const analyser: Competance = 
    {
        id: 2,
        nom: 'Analyser',
        evaluationListe: [[2, 6], [2,3]]
    };

export const realiser: Competance = 
    {
        id: 3,
        nom: 'Réaliser',
        evaluationListe: [[4, -1], [2,-2]]
    };

export const valider: Competance = 
    {
        id: 4,
        nom: 'Valider',
        evaluationListe: [[1, 6], [2,6]]
    };

export const communiquer: Competance = 
    {
        id: 5,
        nom: 'Communiquer',
        evaluationListe: [[4, -1], [2,1]]
    };

export const connaitre: Competance = 
    {
        id: 6,
        nom: 'Connaître',
        evaluationListe: [[1, 3], [2,3]]
    };

export const charisme: Competance = 
    {
        id: 7,
        nom: 'Charisme',
        evaluationListe: [[1, 6], [2,6]]
    };
