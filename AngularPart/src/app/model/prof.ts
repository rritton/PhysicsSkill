import { Joueur } from "./joueur";
import { Groupe } from "./classe";

export class Prof extends Joueur{
    motDePasse: String;
    groupes: Array<Groupe>;
}