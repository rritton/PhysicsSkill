export class Lvl{
    //Attributs
    id: number;
    nom: string;
    niveau: number;
    xpMin: number;
    xpMax: number;
    imageFichier: string;

    //Méthodes
    constructor(nom: string, niveau: number, xpMin: number, xpMax: number, imageFichier: string){
        this.id = 0;
        this.nom = nom;
        this.niveau = niveau;
        this.xpMin = xpMin;
        this.xpMax = xpMax;
        this.imageFichier = imageFichier;
    }
}

export const lvl0: Lvl =
{
    id: 0,
    nom: 'New Be',
    niveau: 0,
    xpMin: 0,
    xpMax: 10,
    imageFichier: 'new_be.jpg.jpg',
}

export const lvl1: Lvl =
{
    id: 1,
    nom: 'La brute',
    niveau: 1,
    xpMin: 10,
    xpMax: 60,
    imageFichier: 'la_brute.jpg',
}