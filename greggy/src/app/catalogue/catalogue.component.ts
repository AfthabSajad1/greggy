import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent {

  num: number[] = [0,1,2,3];
  products: Product[] = [{"id":1,
    "name":"crackle vase",
    "description":"snap. crackle. vase. introducing the crackle vase by seth featuring a new specialty glaze in light blue.",
    "img1":"https://github.com/greggy-in/product-images/blob/main/231017_Houseplant_Q4_PDP50042-Fcopy_1080x.png?raw=true",
    "img2":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseLifestyle_1080x.png?raw=true",
    "img3":"https://github.com/greggy-in/product-images/blob/main/CrackleVasePDP_1080x.png?raw=true",
    "img4":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseSeamless_1080x.png?raw=true",
    "available_no":10,"price":6000,"is_on_display":true},
    {"id":2,
    "name":"crackle vase",
    "description":"snap. crackle. vase. introducing the crackle vase by seth featuring a new specialty glaze in light blue.",
    "img1":"https://github.com/greggy-in/product-images/blob/main/231017_Houseplant_Q4_PDP50042-Fcopy_1080x.png?raw=true",
    "img2":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseLifestyle_1080x.png?raw=true",
    "img3":"https://github.com/greggy-in/product-images/blob/main/CrackleVasePDP_1080x.png?raw=true",
    "img4":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseSeamless_1080x.png?raw=true",
    "available_no":10,"price":6000,"is_on_display":true},
    {"id":3,
    "name":"crackle vase",
    "description":"snap. crackle. vase. introducing the crackle vase by seth featuring a new specialty glaze in light blue.",
    "img1":"https://github.com/greggy-in/product-images/blob/main/231017_Houseplant_Q4_PDP50042-Fcopy_1080x.png?raw=true",
    "img2":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseLifestyle_1080x.png?raw=true",
    "img3":"https://github.com/greggy-in/product-images/blob/main/CrackleVasePDP_1080x.png?raw=true",
    "img4":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseSeamless_1080x.png?raw=true",
    "available_no":10,"price":6000,"is_on_display":true},
    {"id":4,
    "name":"crackle vase",
    "description":"snap. crackle. vase. introducing the crackle vase by seth featuring a new specialty glaze in light blue.",
    "img1":"https://github.com/greggy-in/product-images/blob/main/231017_Houseplant_Q4_PDP50042-Fcopy_1080x.png?raw=true",
    "img2":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseLifestyle_1080x.png?raw=true",
    "img3":"https://github.com/greggy-in/product-images/blob/main/CrackleVasePDP_1080x.png?raw=true",
    "img4":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseSeamless_1080x.png?raw=true",
    "available_no":10,"price":6000,"is_on_display":true},
    {"id":5,
    "name":"crackle vase",
    "description":"snap. crackle. vase. introducing the crackle vase by seth featuring a new specialty glaze in light blue.",
    "img1":"https://github.com/greggy-in/product-images/blob/main/231017_Houseplant_Q4_PDP50042-Fcopy_1080x.png?raw=true",
    "img2":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseLifestyle_1080x.png?raw=true",
    "img3":"https://github.com/greggy-in/product-images/blob/main/CrackleVasePDP_1080x.png?raw=true",
    "img4":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseSeamless_1080x.png?raw=true",
    "available_no":10,"price":6000,"is_on_display":true},
    {"id":6,
    "name":"crackle vase",
    "description":"snap. crackle. vase. introducing the crackle vase by seth featuring a new specialty glaze in light blue.",
    "img1":"https://github.com/greggy-in/product-images/blob/main/231017_Houseplant_Q4_PDP50042-Fcopy_1080x.png?raw=true",
    "img2":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseLifestyle_1080x.png?raw=true",
    "img3":"https://github.com/greggy-in/product-images/blob/main/CrackleVasePDP_1080x.png?raw=true",
    "img4":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseSeamless_1080x.png?raw=true",
    "available_no":10,"price":6000,"is_on_display":true},
    {"id":7,
    "name":"crackle vase",
    "description":"snap. crackle. vase. introducing the crackle vase by seth featuring a new specialty glaze in light blue.",
    "img1":"https://github.com/greggy-in/product-images/blob/main/231017_Houseplant_Q4_PDP50042-Fcopy_1080x.png?raw=true",
    "img2":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseLifestyle_1080x.png?raw=true",
    "img3":"https://github.com/greggy-in/product-images/blob/main/CrackleVasePDP_1080x.png?raw=true",
    "img4":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseSeamless_1080x.png?raw=true",
    "available_no":10,"price":6000,"is_on_display":true},
    {"id":8,
    "name":"crackle vase",
    "description":"snap. crackle. vase. introducing the crackle vase by seth featuring a new specialty glaze in light blue.",
    "img1":"https://github.com/greggy-in/product-images/blob/main/231017_Houseplant_Q4_PDP50042-Fcopy_1080x.png?raw=true",
    "img2":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseLifestyle_1080x.png?raw=true",
    "img3":"https://github.com/greggy-in/product-images/blob/main/CrackleVasePDP_1080x.png?raw=true",
    "img4":"https://github.com/greggy-in/product-images/blob/main/CrackleVaseSeamless_1080x.png?raw=true",
    "available_no":10,"price":6000,"is_on_display":true},
  ];

  constructor(private router: Router,
    private service: ServiceService
  ){}

  show_greggy_details: boolean = false;

  switch_page(){
    this.router.navigateByUrl("/details")
  }

  go_to_product(id: number){
    // console.log("to product ", id)
    this.router.navigate(["/product",id])
  }

  ngOnInit(){
    this.service.getAllProducts();

  }
}
