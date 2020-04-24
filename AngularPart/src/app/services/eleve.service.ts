import { Injectable } from '@angular/core';
import { Eleve } from '../model/eleve';
import { Lvl } from '../model/lvl';
import { CompetanceService } from './competance.service';
import { Groupe } from '../model/classe';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  eleve: Eleve;

  constructor(
    private competanceService: CompetanceService
    ) { }

  
  //Récupération de l'xp total lié aux compétances
  getXP(eleve: Eleve){
    let xp: number;
    xp = 0;
    for (let competance of eleve.competanceListe){
      xp += this.competanceService.getXP(competance);
    }
    return xp
  }

  //Récupération du lvl
  getLvl(eleve: Eleve, classe: Groupe){
      let xp = this.getXP(eleve);
      let lvlEleve: Lvl;
      for(let lvl of classe.lvlListe){
          if(lvl.xpMin <= xp && lvl.xpMax > xp){
              lvlEleve = lvl;
          }
      }
      return lvlEleve;
  }

  //Récupération de la moyenne
  getNote(eleve: Eleve){
      return 10;
  }
}
