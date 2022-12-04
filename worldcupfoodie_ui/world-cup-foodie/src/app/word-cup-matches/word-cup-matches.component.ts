import { Component, OnInit } from '@angular/core';
import { WorldCupMatchesService } from '../world-cup-matches.service';
import { WorldCupMatchInfo } from '../world-cup-match-info';
@Component({
  selector: 'app-word-cup-matches',
  templateUrl: './word-cup-matches.component.html',
  styleUrls: ['./word-cup-matches.component.css']
})
export class WordCupMatchesComponent implements OnInit {
  allMatches: WorldCupMatchInfo[] = [];

  // constructor(private worldCupMatches: WorldCupMatchesService) { }

  // ngOnInit(): void {
  //   this.allMatches = this.worldCupMatches.getAllMatches();

  // }
  constructor(private service: WorldCupMatchesService) { }

  ngOnInit(): void {
  this.service.getAllMatches().subscribe((data:WorldCupMatchInfo[])=>this.allMatches=data);

  }

  
}
