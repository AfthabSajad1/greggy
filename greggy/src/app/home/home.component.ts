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

  nums: number[] = [0,1,2,3,4,5,6,7];
  constructor(private router: Router){}
  logo_clicked: boolean = false;

  logo_click(){
    this.logo_clicked = true;
  }

  to_catalogues(){

    if(this.logo_clicked){
      this.router.navigateByUrl('/products')
    }
  }
}
