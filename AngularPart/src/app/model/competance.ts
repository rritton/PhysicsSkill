export class Competance{
    id: number;
    nom: String;
}

export class CompetanceEleve extends Competance{
    valeurList: Array<CompetanceValeur>;
}


export enum CompetanceValeur{
    NonEvalue = -1,
    Abs = -1,
    A = 6,
    B = 3,
    C = 1,
    D = 0
}

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