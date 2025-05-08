import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl: string = 'https://api.greggy.in/api/products';

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(this.baseUrl);
  }

  getProduct(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
