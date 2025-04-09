import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { Product } from '../product';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart: Product = {"id":1,
    "name":"crackle vase",
    "description":"snap. crackle. vase. introducing the crackle vase by seth featuring a new specialty glaze in light blue.",
    "img1":"https://github.com/greggy-in/product-images/blob/main/231017_Houseplant_Q4_PDP50042-Fcopy_1080x.png?raw=true",
    "img2":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseLifestyle_1080x.png?raw=true",
    "img3":"https://github.com/greggy-in/product-images/blob/main/CrackleVasePDP_1080x.png?raw=true",
    "img4":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseSeamless_1080x.png?raw=true",
    "available_no":10,"price":6000,"is_on_display":true};

  quantity: number = 1;
  hideProduct: boolean = false;
  isCartEmpty: boolean = true;
  constructor(private router: Router,
    private location: Location,
    private cartService: CartServiceService
  ){}

  ngOnInit(){
    this.getProductsInCart();
  }

  back_to_product(){
    this.location.back();
  }

  getProductsInCart(){
    // this.cart = this.cartService.getCartItems();
    // console.log(this.cart)
  }

  redirect_to_razorpay(){
    // console.log("redirect to razorpay")
  }

  // increment(){
  //   this.quantity = this.quantity + 1
  // }

  // decrement(){
  //   this.quantity = this.quantity - 1
  //   if(this.quantity == 0){
  //     this.hideProduct = true;
  //   }
  // }
}
