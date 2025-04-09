import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  cart: Product[] = [];
  constructor() { }

  addItem(product: Product) {
    console.log('in add item')
    this.cart.push(product);
    // localStorage.setItem('cart', JSON.stringify(this.cart));
    // console.log('cart:',this.cart)
  }

  getAllItem(): Product[] {
    return this.cart;
  }

  removeItem(id: number): void {
    this.cart = this.cart.filter(f => f.id != id);
  }

  clearCart(): void {
    this.cart = [];
    // localStorage.removeItem('cart');
  }

}
