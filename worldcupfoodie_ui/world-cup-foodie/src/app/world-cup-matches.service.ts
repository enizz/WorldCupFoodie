import { Injectable } from '@angular/core';
import { WorldCupMatchInfo } from './world-cup-match-info';
@Injectable({
  providedIn: 'root'
})
export class WorldCupMatchesService {
  matches: WorldCupMatchInfo[] = [
    {
    

      id:47,
      team1:'Serbia' ,
      team2:'Switzerland' ,

      matchDate:'2022-12-02 22:00:00.000' ,
    },
    {
     

      id:48,
      team1:'Cameroon' ,
      team2:'Brazil' ,

      matchDate:'2022-12-02 22:00:00.000' ,
    },
    {
     

      id:45,
      team1:'Ghana' ,
      team2:'Uruguay' ,

      matchDate:'2022-12-02 22:00:00.000' ,
    },
    
  ];
  constructor() { }

  getAllMatches(): WorldCupMatchInfo[] {
    return this.matches;
  }
}
