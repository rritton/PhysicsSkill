import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur';

@Injectable()
export class ConnexionService {

  constructor() {}

  connexion(joueur): Joueur{
    console.log('coucou depuis ConnexionService - fonction connexion');
    return null;
  }
}
