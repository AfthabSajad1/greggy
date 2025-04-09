import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Product } from '../product';
import { CartServiceService } from '../cart-service.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  product: Product = {"id":1,
    "name":"crackle vase",
    "description":"snap. crackle. vase. introducing the crackle vase by seth featuring a new specialty glaze in light blue.",
    "img1":"https://github.com/greggy-in/product-images/blob/main/231017_Houseplant_Q4_PDP50042-Fcopy_1080x.png?raw=true",
    "img2":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseLifestyle_1080x.png?raw=true",
    "img3":"https://github.com/greggy-in/product-images/blob/main/CrackleVasePDP_1080x.png?raw=true",
    "img4":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseSeamless_1080x.png?raw=true",
    "available_no":10,"price":6000,"is_on_display":true};

  expand1: boolean = false;
  expand2: boolean = false;
  expand3: boolean = false;
  expand4: boolean = false;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: ServiceService,
    private localStorageService: LocalService
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

  getProductDetails(id: any){
    this.service.getProduct(id);
  }

  add_to_cart(){
    // localStorage.setItem('cart', JSON.stringify(this.product))
    this.go_to_cart();
  }
}
