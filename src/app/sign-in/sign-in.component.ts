import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {lastValueFrom} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

interface AuthResponse {
  token: string;
}

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  userCredentials = {
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private router: Router,private http:HttpClient) {}

  async onSubmit() {
    console.log("User Info:",this.userCredentials)
    this.errorMessage = '';
    const signInUrl = 'http://localhost:8081/api/v1/auth/login';

    try{
      const response = await lastValueFrom(this.http.post<AuthResponse>(signInUrl,this.userCredentials));
      console.log('Sign-up successful!', response);
      alert('Account created successfully!');

      localStorage.setItem('authToken',response.token);
      localStorage.setItem('user', JSON.stringify(response));
      this.router.navigate(['/home'])
    } catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          this.errorMessage = 'Invalid email or password.';
        } else {
          this.errorMessage = 'Login failed. Please try again.';
        }
      } else {
        this.errorMessage = 'An unexpected error occurred.';
      }
      console.error('Login failed', error);
    }

  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
