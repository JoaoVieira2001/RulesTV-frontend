import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public messages: string[] = [];

  show(message: string) {
    this.messages.push(message);
    setTimeout(() => this.messages.shift(), 3000);
  }
}
