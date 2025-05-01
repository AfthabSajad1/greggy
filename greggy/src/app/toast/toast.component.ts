import { Component } from '@angular/core';
import { ToasterService } from '../toaster.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  toast: { type: string, message: string } | null = null;

  constructor(private toasterService: ToasterService) {
    this.toasterService.toast$.subscribe(t => this.toast = t);
  }

}
