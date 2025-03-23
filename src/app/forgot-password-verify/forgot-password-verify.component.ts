import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password-verify',
  standalone: false,
  templateUrl: './forgot-password-verify.component.html',
  styleUrl: './forgot-password-verify.component.css'
})
export class ForgotPasswordVerifyComponent {

  constructor(private router: Router) {}

  navigateToForgotPasswordReplace(){
    this.router.navigate(['/forgot-password-replace'])
  }
}
