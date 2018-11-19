import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur';
import { joueurs } from '../model/joueurListe';

@Injectable()
export class ConnexionService {

  constructor() {}

  connexion(joueur: Joueur): Joueur{
    console.log('coucou depuis ConnexionService - fonction connexion');
    for(let i in joueurs){
      if(joueurs[i].nom == joueur.nom && joueurs[i].prenom == joueur.prenom){
        console.log('Nous vous avons trouvé : '+joueurs[i].role);
        return joueurs[i];
      }
    }
    console.log('Nous ne vous avons pas trouvé');
    return null;
  }

  //Fonction de validation du mot de passe. A compléter réellement quand l'API sera en place
  validationMDP(joueur: Joueur, mdp: string): boolean{
    return true;
  }
}
