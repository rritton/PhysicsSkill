//ANgular import
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Service import
import { ConnexionService } from 'src/app/services/connexion.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

//Model import
import { Eleve } from 'src/app/model/eleve';
import { Prof } from 'src/app/model/prof';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nomCtrl: FormControl;
  public prenomCtrl: FormControl;
  public connexionForm: FormGroup;
  public messageSubmit: string;
  public messageNom: string;
  public messagePrenom: string;

  constructor(
    private fb: FormBuilder,
    private connexionService: ConnexionService,
    private storageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.nomCtrl = this.fb.control('', Validators.required);
    this.prenomCtrl = this.fb.control('', Validators.required);

    this.connexionForm = this.fb.group({
      nom: this.nomCtrl,
      prenom: this.prenomCtrl
    });

    //Initialisation des messages d'érreurs
    this.messageSubmit = ''
    this.messageNom = ''
    this.messagePrenom = ''
  }

  connexion() {
    //Les champs ont bien été remplis ?
    let champsRemplis = true;
    //Vérification du champ "Nom"
    if(this.connexionForm.value.nom.trim() == '') {
      champsRemplis = false;
      this.messageNom = 'Veuillez renseigner votre nom.'
    } 
    else this.messageNom = ''
    //Vérification du champ "Prénom"
    if(this.connexionForm.value.prenom.trim() == '') {
      champsRemplis = false;
      this.messagePrenom = 'Veuillez renseigner votre prénom.'
    } 
    else this.messagePrenom = ''
    //OUI ?
    if(champsRemplis){
      const joueurForm = {
        id: undefined,
        nom: this.connexionForm.value.nom,
        prenom: this.connexionForm.value.prenom,
        role: undefined
      };

      let joueurTest = this.connexionService.connexion(joueurForm);
      if(joueurTest.role == 'Eleve'){
        let joueurObtenu = joueurTest as Eleve;
        this.storageService.saveSession('Eleve', joueurObtenu);
        this.router.navigate(['elevehome']);
      }
      else if(joueurTest.role == 'Prof'){
        let joueurObtenu = joueurTest as Prof;
        joueurObtenu.motDePasse = '';
        this.storageService.saveSession('Prof', joueurObtenu);
        this.router.navigate(['mdp']);
      }
      else {
        this.messageSubmit = 'Ensemble Nom et Prénom inconnu.';
      }
    }
  }
}
