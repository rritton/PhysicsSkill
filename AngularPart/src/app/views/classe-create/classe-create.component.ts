import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Groupe } from 'src/app/model/classe';
import { Lvl } from 'src/app/model/lvl';
import { Eleve } from 'src/app/model/eleve';

@Component({
  selector: 'app-classe-create',
  templateUrl: './classe-create.component.html',
  styleUrls: ['./classe-create.component.css']
})
export class ClasseCreateComponent implements OnInit {

  classeCreateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.classeCreateForm = this.fb.group({
      nom: ['', Validators.required],
      nomLvlListe: this.fb.array([]),
      xpMaxLvlListe: this.fb.array([]),
      imageLvlListe: this.fb.array([]),
      nomEleveListe: this.fb.array([]),
      prenomEleveListe: this.fb.array([])
    });
  }

  //Les formulaires pour les Lvl
  getNomLvl(): FormArray {
    return this.classeCreateForm.get('nomLvlListe') as FormArray;
  }
  getXpMaxLvl(): FormArray {
    return this.classeCreateForm.get('xpMaxLvlListe') as FormArray;
  }
  getImageLvl(): FormArray {
    return this.classeCreateForm.get('imageLvlListe') as FormArray;
  }

  ajoutLvl(){
    const lvlControl = this.fb.control(null, Validators.required);
    this.getNomLvl().push(lvlControl);
    this.getXpMaxLvl().push(lvlControl);
    this.getImageLvl().push(lvlControl);
  }
  
  //Les formulaires pour les Eleve
  getNomEleve(): FormArray {
    return this.classeCreateForm.get('nomEleveListe') as FormArray;
  }
  getPrenomEleve(): FormArray {
    return this.classeCreateForm.get('prenomEleveListe') as FormArray;
  }

  ajoutEleve(){
    const eleveControl = this.fb.control(null, Validators.required);
    this.getNomEleve().push(eleveControl);
    this.getPrenomEleve().push(eleveControl);
  }

  //Méthodes du submit pour la création de la classe
  saveClasse(){
    console.log("Bienvenue dans saveClasse");
    const formValue = this.classeCreateForm.value;


    //Gestion des lvl
    let lvlListeForm: Array<Lvl>;
    lvlListeForm = [];
    let i = 0;
    let newLvl: Lvl;
    for (let [nomLvl, xpMaxLvl, imageLvl] of [formValue["nomLvlListe"],formValue["xpMaxLvlListe"],formValue["imageLvlListe"]]){
      i ++;
      if(i == 1){
        newLvl = new Lvl(nomLvl, i, 0, xpMaxLvl, imageLvl);
      }
      else {
        newLvl = new Lvl(nomLvl, i, formValue["xpMaxLvlListe"][i-2], xpMaxLvl, imageLvl);
      }
      lvlListeForm.push(newLvl);
    }

    //Gestion des élèves
    let eleveListeForm: Array<Eleve>;
    eleveListeForm = [];
    let newEleve: Eleve;
    for (let [nomEleve, prenomEleve] of [formValue["nomEleveListe"], formValue["prenomEleveListe"]]){
      newEleve = new Eleve(nomEleve, prenomEleve);
      eleveListeForm.push(newEleve);
    }

    //Création de la classe
    const newClasse = new Groupe(formValue["nom"], lvlListeForm, eleveListeForm);
    console.log("au revoir");
  }
}
