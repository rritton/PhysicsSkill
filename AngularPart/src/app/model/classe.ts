import { Eleve } from "./eleve";
import { Evaluation } from "./evaluation";

export class Groupe{
    id: number;
    eleveList: Array<Eleve>;
    evaluationList: Array<Evaluation>;
}