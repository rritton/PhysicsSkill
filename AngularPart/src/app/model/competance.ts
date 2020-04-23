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
