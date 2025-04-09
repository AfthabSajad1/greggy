import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  name: string = '';
  email: string = '';

  onSubmit() {
    console.log('Form submitted:', this.name, this.email);
    // Handle form submission logic here
  }
}
