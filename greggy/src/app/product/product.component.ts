import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Product } from '../product';
import { Cart } from '../cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  product: Product = {
    id: 0,
    name: '',
    description: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    available_no: 0,
    price: 0,
    is_on_display: false
  };

  expand1: boolean = false;
  expand2: boolean = false;
  expand3: boolean = false;
  expand4: boolean = false;
  show_images: boolean = false;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: ServiceService,
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getProductDetails(id);
    });

  }

  go_to_cart(){
    this.router.navigateByUrl('/cart')
  }

  back(){
    this.router.navigateByUrl('/products')
  }

  expand_img1(){
    this.expand1 = !this.expand1;
  }
  expand_img2(){
    this.expand2 = !this.expand2;
  }
  expand_img3(){
    this.expand3 = !this.expand3;
  }
  expand_img4(){
    this.expand4 = !this.expand4;
  }

  //for mobile
  expand_images(){
    this.show_images = !this.show_images;
  }

  getProductDetails(id: any){
    this.service.getProduct(id).subscribe((data: any) => {
      this.product = data;
    });
  }

  add_to_cart(){
    let cart: Cart[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item =>item.product.id === this.product.id)
    if(existing){
      existing.quantity++;
    } else{
      cart.push({product: this.product,quantity: 1});      
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.go_to_cart();
  }
}
