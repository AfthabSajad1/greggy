import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent {

  constructor(private router: Router){}

  show_greggy_details: boolean = false;

  switch_page(){
    this.router.navigateByUrl("/details")
    console.log("in switch page")
  }

  go_to_product(){
    console.log("in go to product")
    this.router.navigateByUrl("/product")
  }
}
