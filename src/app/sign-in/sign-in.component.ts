import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {lastValueFrom} from 'rxjs';
import {HttpClient} from '@angular/common/http';

interface AuthResponse {
  token: string;
  email: string;
  role: string;
  full_name: string;
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
    console.log("User Info:", this.userCredentials);
    this.errorMessage = '';
    const signInUrl = 'http://localhost:8081/api/v1/auth/login';

    try {
      const response = await lastValueFrom(this.http.post<AuthResponse>(signInUrl, this.userCredentials));
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('user', JSON.stringify(response));
      console.log("UserDAta:",JSON.stringify(response))

      this.router.navigate(['/home']);
    } catch (error: any) {
      if (error.status === 401) {
        this.errorMessage = 'Invalid email or password.';
      } else if (error.status === 400) {
        this.errorMessage = 'Bad request. Please check your input.';
      } else if (error.status === 500) {
        this.errorMessage = 'Server error. Please try again later.';
      } else {
        this.errorMessage = `Login failed. Error ${error.status}: ${error.message}`;
      }
    }
  }


  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
