import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ConnexionService } from 'src/app/services/connexion.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-connexion-valide',
  templateUrl: './connexion-valide.component.html',
  styleUrls: ['./connexion-valide.component.css']
})
export class ConnexionValideComponent implements OnInit {

  public mdpCtrl: FormControl;
  public validationForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private connexionService: ConnexionService,
    private storageService: LocalStorageService,
    private router: Router
    ) { }

  ngOnInit() {
    this.mdpCtrl = this.fb.control('', Validators.required);

    this.validationForm = this.fb.group({
      password: this.mdpCtrl
    });
  }

  validation(){
    //Le champs à bien été rempli ?
    let champsRemplis = true;
    //Vérification du champ 
    if(this.validationForm.value.password.trim() == '') {
      champsRemplis = false;
    }

    if(champsRemplis){
      //Est ce le bon mot de passe
      if(this.connexionService.validationMDP(this.storageService.readSession('Prof'),
                                          this.validationForm.value.password)){
        this.router.navigate(['profhome']);
      } else {
        this.storageService.clear();
        this.router.navigate(['home']);
      }
      
    }
  }
}
