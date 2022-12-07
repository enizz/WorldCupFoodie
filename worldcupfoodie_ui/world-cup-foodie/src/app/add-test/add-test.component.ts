import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WorldCupDish } from '../interface/world-cup-dish';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  @Output() dishSave = new EventEmitter<WorldCupDish>();

  matchId: number = 0;
  dish1: string = '';
  description: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  submit = (): void => {
    this.dishSave.emit({
      matchId: this.matchId,
      dish1: this.dish1,
      description: this.description,
    });
    this.matchId = 1;
    this.dish1 = '';
    this.description = '';
  };

}
