import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProfHomeComponent } from './views/prof-home/prof-home.component';
import { EleveHomeComponent } from './views/eleve-home/eleve-home.component';
import { ClasseHomeComponent } from './views/classe-home/classe-home.component';
import { ConnexionValideComponent } from './views/connexion-valide/connexion-valide.component';
import { ClasseCreateComponent } from './views/classe-create/classe-create.component';
import { EvaluationCreateComponent } from './views/evaluation-create/evaluation-create.component';
import { ConnecteComponent } from './views/connecte/connecte.component';

import { ConnexionService } from './services/connexion.service';
import { EleveService } from './services/eleve.service';
import { LocalStorageService } from './services/local-storage.service';
import { ProfService } from './services/prof.service';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfHomeComponent,
    EleveHomeComponent,
    ClasseHomeComponent,
    ConnexionValideComponent,
    ClasseCreateComponent,
    EvaluationCreateComponent,
    ConnecteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    ConnexionService,
    EleveService,
    LocalStorageService,
    ProfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
