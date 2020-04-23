import { Injectable } from '@angular/core';
import { Competance } from '../model/competance';

@Injectable({
  providedIn: 'root'
})
export class CompetanceService {

  constructor() { }


  
  //Ajout d'une évaluation de la compétance
  adEvaluation(competance: Competance, idEvaluation: number, note: number){
    competance.evaluationListe.push([idEvaluation,note]);
  }

  //Récupération de l'xp total lié à la compétance
  getXP(competance: Competance){
      let xp: number;
      xp = 0;
      for (let evaluation of competance.evaluationListe) {
          if(evaluation[1]>=0) {
              xp += evaluation[1];
          }
      }
      return xp;
  }

  //récupération du nombre de fois où la compétance a été évaluée
  getPoid(competance: Competance){
      let nb: number;
      nb = 0;
      for (let evaluation of competance.evaluationListe) {
          if(evaluation[1]>=0) { //Les valeurs négatives servent pour les fois où elle aurait dû mais elle n'a pas été évaluée
              nb ++;
          }
      }
      return nb;
  }

  //Calcul de la moyenne
  getMoyenne(competance: Competance){
      return this.getXP(competance)/this.getPoid(competance);
  }
}
