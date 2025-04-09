import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getAllProducts(){
    console.log("get all products");
  }

  getProduct(id: number){
    console.log("get selected product:", id);
  }
}
