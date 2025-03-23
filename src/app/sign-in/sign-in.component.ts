import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  constructor(private router: Router) {}

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
