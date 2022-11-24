import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal, RootObject } from './interface/world-cup-foodie';


@Injectable({
  providedIn: 'root'
})
export class WorldCupFoodieService {

  constructor(private httpClient: HttpClient) { }

  getMeals = (): Observable<RootObject> => {
    return this.httpClient.get<RootObject>("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
  }
}
