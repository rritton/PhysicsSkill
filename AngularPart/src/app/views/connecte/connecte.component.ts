import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Prof } from 'src/app/model/prof';

@Component({
  selector: 'app-connecte',
  templateUrl: './connecte.component.html',
  styleUrls: ['./connecte.component.css']
})
export class ConnecteComponent implements OnInit {
  connecte: boolean;
  prof: Prof;

  constructor(
    private storageService: LocalStorageService,
    private router: Router
    ) { }

  ngOnInit() {
    //Par defaut on affiche pas le component
    this.connecte = false;
    //Il y a un prof enregistré dans le localSotarge
    if(this.storageService.readLocal('ProfValide') != undefined){
      this.connecte = true;
      this.prof = this.storageService.readLocal('ProfValide');
    } 
    //Il y a un prof enregistré dans le sessionStorage
    else if(this.storageService.readSession('ProfValide') != undefined){
      this.connecte = true;
      this.prof = this.storageService.readSession('ProfValide');
    }
    //Il n'y a personne
    else{
    }
  }

  deconnexion(){
    this.storageService.clear();
    this.router.navigate(['']);
  }

}
