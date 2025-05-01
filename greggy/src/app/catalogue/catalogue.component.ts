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
  products: Product[] = []

  constructor(private router: Router,
    private service: ServiceService){}

  switch_page(){
    this.router.navigateByUrl("/details")
  }

  go_to_product(id: number){
    // console.log("to product ", id)
    this.router.navigate(["/product",id])
  }

  ngOnInit(){
    this.service.getAllProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
}
