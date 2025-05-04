import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CommonModule, Location} from '@angular/common';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: Cart[] = [];
  totalPrice: number = 0;

  isCartEmpty: boolean = true;
  constructor(private router: Router,
    private location: Location
  ){}

  ngOnInit(){
    this.getProductsInCart();
    this.calculateTotal()
  }

  back_to_product(){
    this.location.back();
  }

  getProductsInCart(){
    let productData = localStorage.getItem('cart');
    this.cartItems = productData ? JSON.parse(productData) : [];
    this.isCartEmptyCheck();
  }

  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.product.price*item.quantity, 0);
  }
  
  go_to_order(){
    if(this.isCartEmpty){
      
    }else{
      this.router.navigate(["/order"])
    }
  }

  increment(item: Cart){
    item.quantity++;
    this.saveCart();
    this.calculateTotal();
  }

  decrement(item: Cart){
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.remove(item);
    }
    this.saveCart();
    this.calculateTotal();
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.isCartEmptyCheck();
  }

  isCartEmptyCheck(){
    if(this.cartItems.length==0){
      this.isCartEmpty = true;
    }else{
      this.isCartEmpty = false;
    }
  }

  remove(item: Cart) {
    this.cartItems = this.cartItems.filter(i => i.product.id !== item.product.id);
    this.saveCart();
    this.calculateTotal();
  }

  go_to_product(item: Cart){
    this.router.navigate(["/product",item.product.id])
  }
}
