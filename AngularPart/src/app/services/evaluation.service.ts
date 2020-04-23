import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor() { }

  //Ajout d'une évaluation
  ajoutEvaluation(competancesEleveListe: number[][], idCompetance: number, idEleve: number, note: number){
    competancesEleveListe.push([idCompetance, idEleve, note]);
  }
}
