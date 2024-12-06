import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router){}
  logo_clicked: boolean = false;

  logo_click(){
    this.logo_clicked = true;
  }

  to_catalogues(){
    console.log("in to catalogues")
    this.router.navigateByUrl('/products')
  }
}
