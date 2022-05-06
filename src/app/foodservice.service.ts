import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './food';
@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  getFoodList(): Observable<Food[]>{
    return this.httpClient.get<Food[]>(`${this.baseURL}/foodDetails`);
  }

  createFood(food:Food): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addfood`,food)
  }
  

  getFoodById(id: number):Observable<Food>{
    return this.httpClient.get<Food>(`${this.baseURL}/getFoodById/${id}`);
  }

  updateFood(id:number,food:Food):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/editFood/${id}`,Food);
  }
  deleteStudent(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deletestudent/${id}`)
  }

}
