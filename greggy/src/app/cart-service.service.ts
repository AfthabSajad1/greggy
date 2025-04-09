import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  private cartItems: Product[] = [];

  addToCart(item: any): void {
    this.cartItems.push(item);
    // localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  getCartItems(): Product[] {
    const items = localStorage.getItem('cartItems');
    return items == null ? {} : JSON.parse(items)
  }

  clearCart(): void {
    this.cartItems = [];
  }

}
