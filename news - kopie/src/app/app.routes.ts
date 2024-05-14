import { Routes } from '@angular/router';
import {OverzichtComponent} from "./overzicht/overzicht.component";
import {KeuzeschermComponent} from "./keuzescherm/keuzescherm.component";
import {DetailsComponent} from "./details/details.component";

export const routes: Routes = [
  { path:'', component: OverzichtComponent},
  { path:'overzicht', component: OverzichtComponent},
  { path:'keuze/:onderwerp', component: KeuzeschermComponent},
  { path:'details/:nieuwsitem', component: DetailsComponent}
];
