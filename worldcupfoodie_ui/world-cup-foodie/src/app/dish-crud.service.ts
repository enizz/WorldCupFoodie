import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorldCupDish } from './interface/world-cup-dish';

@Injectable({
  providedIn: 'root'
})
export class DishCrudService {
  backendURL:string='https://localhost:7235/api';

  constructor(private httpClient: HttpClient) { }

  addNewDish = (dish: WorldCupDish): Observable<WorldCupDish> => {
    return this.httpClient.post<WorldCupDish>(this.backendURL + "/Dishes/", dish)}
}
