import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocComponent } from './poc/poc.component';
import { WordCupMatchesComponent } from './word-cup-matches/word-cup-matches.component';
const routes: Routes = [
  {path:'poc',component:PocComponent},
  {path:'world-cup-matches',component:WordCupMatchesComponent},

  {path:'',component:WordCupMatchesComponent,pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
