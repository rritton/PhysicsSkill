//ANgular import
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Service import
import { LocalStorageService } from 'src/app/services/local-storage.service';

//Model import
import { Eleve } from 'src/app/model/eleve';

@Component({
  selector: 'app-eleve-home',
  templateUrl: './eleve-home.component.html',
  styleUrls: ['./eleve-home.component.css']
})
export class EleveHomeComponent implements OnInit {

  public eleveConnecte: Eleve

  constructor(
    private storageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    //Il y a un élève enregistré dans le localSotarge
    if(this.storageService.readSession('Eleve') != undefined){
      this.eleveConnecte = this.storageService.readSession('Eleve');
    } 
    //Il n'y a personne
    else{
      console.log("Raté")
    }
  }

  onRetour() {
    this.router.navigate(['']);
  }

}
