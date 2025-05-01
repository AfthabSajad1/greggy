import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private _toast = new BehaviorSubject<{ type: string, message: string } | null>(null);
  toast$ = this._toast.asObservable();

  show(type: 'success' | 'error' | 'info' | 'warning', message: string) {
    this._toast.next({ type, message });

    // Auto-dismiss after 3s
    setTimeout(() => this._toast.next(null), 3000);
  }
}
