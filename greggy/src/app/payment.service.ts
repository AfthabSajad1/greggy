import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl: string = 'http://localhost:8080/api/payment';

  constructor(private http: HttpClient) {}

  createOrder(amount: number) {
    return this.http.post(`${this.baseUrl}/create-order?amount=` + amount, {});
  }
}
