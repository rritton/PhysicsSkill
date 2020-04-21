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
    adEvaluation(evalRef: number, note: number){
        let couple = [evalRef,note];
        this.evaluationListe.push(couple);
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

/*
export class CompetanceEleve extends Competance{
    valeurList: Array<CompetanceValeur>;
}
*/

export enum CompetanceValeur{
    NonEvalue = -2,
    Abs = -1,
    A = 6,
    B = 3,
    C = 1,
    D = 0
}

/*
export const sappropier: CompetanceEleve = 
    {
        id: 1,
        nom: 'S\'appropier',
        valeurList: [CompetanceValeur.A, CompetanceValeur.B]
    };

export const analyser: CompetanceEleve = 
    {
        id: 2,
        nom: 'Analyser',
        valeurList: [CompetanceValeur.A, CompetanceValeur.A]
    };

export const realiser: CompetanceEleve = 
    {
        id: 3,
        nom: 'Réaliser',
        valeurList: [CompetanceValeur.B, CompetanceValeur.B]
    };

export const valider: CompetanceEleve = 
    {
        id: 4,
        nom: 'Valider',
        valeurList: [CompetanceValeur.C, CompetanceValeur.B]
    };

export const communiquer: CompetanceEleve = 
    {
        id: 5,
        nom: 'Communiquer',
        valeurList: [CompetanceValeur.A, CompetanceValeur.C]
    };

export const connaitre: CompetanceEleve = 
    {
        id: 6,
        nom: 'Connaître',
        valeurList: [CompetanceValeur.C, CompetanceValeur.C]
    };

export const charisme: CompetanceEleve = 
    {
        id: 7,
        nom: 'Charisme',
        valeurList: [CompetanceValeur.C, CompetanceValeur.A]
    };

*/