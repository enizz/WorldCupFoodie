import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PocComponent } from './poc/poc.component';
import { WordCupMatchesComponent } from './word-cup-matches/word-cup-matches.component';
import { MatchChosenComponent } from './match-chosen/match-chosen.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
import { AddDishComponent } from './add-dish/add-dish.component';
const routes: Routes = [
  {path:'poc',component:PocComponent},
  {path:'world-cup-matches',component:WordCupMatchesComponent},
  {path:'match-chosen',component:WordCupMatchesComponent},
  {path:'grocerylist', component:GrocerylistComponent},
  {path:'add-dish', component:AddDishComponent},

  {path:'',component:WordCupMatchesComponent,pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
