import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  constructor(private router: Router){}

  go_to_cart(){
    this.router.navigateByUrl('/cart')
  }

  back(){
    this.router.navigateByUrl('/products')
  }
}
