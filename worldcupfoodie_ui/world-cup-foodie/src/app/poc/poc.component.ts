import { Component, OnInit } from '@angular/core';
import { Meal, RootObject } from '../interface/world-cup-foodie';
import { WorldCupFoodieService } from '../world-cup-foodie.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {

  apiResponse: RootObject = {
    meals: []
  };

  constructor(private service: WorldCupFoodieService) { }

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals = (): void => {
    this.service.getMeals().subscribe((data: RootObject) => this.apiResponse = data);
  }
}
