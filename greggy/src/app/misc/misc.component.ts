import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-misc',
  standalone: true,
  imports: [],
  templateUrl: './misc.component.html',
  styleUrl: './misc.component.scss'
})
export class MiscComponent {

  constructor(private router: Router){}

  switch_page(){
    this.router.navigateByUrl('/products')
  }

  go_to_about(){
    this.router.navigateByUrl('/about-us')
  }

  go_to_contact(){
    this.router.navigateByUrl('/contact-us')
  }
}
