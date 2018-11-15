import { Lvl } from "./lvl";
import { Evaluation } from "./evaluation";
import { CompetanceEleve } from "./competance";

export class Eleve{
    xp: number;
    lvl: Lvl;
    evaluationsListe: Array<Evaluation>;
    competancesListe: Array<CompetanceEleve>;
}