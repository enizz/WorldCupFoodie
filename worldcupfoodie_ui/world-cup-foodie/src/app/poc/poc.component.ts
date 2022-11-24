import { Component, OnInit } from '@angular/core';
import { Meal, RootObject } from '../interface/world-cup-foodie';
import { WorldCupFoodieService } from '../world-cup-foodie.service';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {

  meals: RootObject = {
    meals: []
  };

  constructor(private service: WorldCupFoodieService) { }

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals = (): void => {
    this.service.getMeals().subscribe((data: RootObject) => this.meals = data);
  }
}
