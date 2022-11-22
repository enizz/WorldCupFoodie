import { Component, OnInit } from '@angular/core';
import { Meal } from '../interface/world-cup-foodie';
import { WorldCupFoodieService } from '../world-cup-foodie.service';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {

  meal: Meal[] = [];

  constructor(private service: WorldCupFoodieService) { }

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals = (): void => {
    this.service.getMeals().subscribe((data: Meal[]) => this.meal = data);
  }
}
