import { Injectable } from '@angular/core';

import { Groupe } from '../model/classe';
import { Lvl } from '../model/lvl';
import { Eleve } from '../model/eleve';
import { Evaluation } from '../model/evaluation';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor() { }

  
  //Ajout d'un lvl
  ajoutLvl(classe: Groupe, lvl: Lvl){
    classe.lvlListe.push(lvl);
  }

  //Ajout d'un élève
  ajoutEleve(classe: Groupe, eleve: Eleve){
    classe.eleveListe.push(eleve);
  }

  //Ajout d'une évaluation
  ajoutEval(classe: Groupe, evaluation: Evaluation){
    classe.evaluationListe.push(evaluation);
  }
}
