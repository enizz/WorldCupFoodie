import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { WorldCupDish } from './interface/world-cup-dish';

import { WorldCupDish } from './interface/world-cup-dish';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DishCrudService {

  backendURL:string='https://localhost:7235/api';

  constructor(private httpClient: HttpClient) { }

  addNewDish = (dish: WorldCupDish): Observable<WorldCupDish> => {
    return this.httpClient.post<WorldCupDish>(this.backendURL + "/Dishes/", dish)}

  dishID=1;

  backendURL:string='https://localhost:7235/api';

  constructor(private httpClient:HttpClient) { }
  getAllDishes = ():Observable<WorldCupDish[]> => {
  return this.httpClient.get<WorldCupDish[]>(this.backendURL + "/Dishes");

}

getFocusedDish= ( incomingDishId: number):Observable<WorldCupDish> => {
  return this.httpClient.get<any>(this.backendURL + "/Dishes/"+incomingDishId);
}

addNewDish = (dish: WorldCupDish): Observable<WorldCupDish> => {
  return this.httpClient.post<WorldCupDish>(this.backendURL + "/Dishes/", dish)}


addNewOrder = (order: WorldCupDish): Observable<WorldCupDish> => {
  return this.httpClient.post<WorldCupDish>(this.backendURL + "/Dishes", order);
}

deleteOrder = (id: number): Observable<void> => {
  return this.httpClient.delete<void>(this.backendURL + "/Dishes/" + id);
}
eventBeingUsed(idEvent: number){
   
  this.dishID = idEvent;
  
}
returnEventID(): number {
return this.dishID;
}
}