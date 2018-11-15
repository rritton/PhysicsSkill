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