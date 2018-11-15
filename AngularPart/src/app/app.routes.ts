import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProfHomeComponent } from './views/prof-home/prof-home.component';
import { EleveHomeComponent } from './views/eleve-home/eleve-home.component';
import { ClasseCreateComponent } from './views/classe-create/classe-create.component';
import { ClasseHomeComponent } from './views/classe-home/classe-home.component';
import { ConnexionValideComponent } from './views/connexion-valide/connexion-valide.component';
import { EvaluationCreateComponent } from './views/evaluation-create/evaluation-create.component';


export const ROUTES: Routes=[
    {path: '', component: HomeComponent},
    {path: 'profhome', component: ProfHomeComponent},
    {path: 'elevehome', component: EleveHomeComponent},
    {path: 'newclasse', component: ClasseCreateComponent},
    {path: 'classehome', component: ClasseHomeComponent},
    {path: 'mdp', component: ConnexionValideComponent},
    {path: 'neweval', component: EvaluationCreateComponent}
];