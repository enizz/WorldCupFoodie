import { Component, OnInit } from '@angular/core';
import { DishCrudService } from '../dish-crud.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { WorldCupMatchesService } from '../world-cup-matches.service';
import { WorldCupMatchInfo } from '../world-cup-match-info';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  constructor(private dishcrudstuff: DishCrudService ,private router: Router,private service2:WorldCupMatchesService) { }
  focusedMatch = <WorldCupMatchInfo> {} as WorldCupMatchInfo;

  ngOnInit(): void {
    this.service2.getFocusedMatch().subscribe((data:WorldCupMatchInfo)=>this.focusedMatch=data);

  }

  
}
