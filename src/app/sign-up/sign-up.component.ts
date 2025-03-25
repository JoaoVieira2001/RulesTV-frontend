import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user = {
    name: '',
    phone_number: '',
    email: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private http: HttpClient) {
  }

  async onSubmit() {
    console.log("User Info:",this.user)
    this.errorMessage = '';
    const signUpUrl = 'http://localhost:8081/api/v1/auth/signup';

    try{
      const response = await lastValueFrom(this.http.post(signUpUrl,this.user));
      console.log('Sign-up successful!', response);
      alert('Account created successfully!');
    } catch (error:any) {
        if( error instanceof HttpErrorResponse){
          if(error.error.includes('Duplicate entry')){
            this.errorMessage = 'The name, email, or mobile number is already in use.';
          } else {
            this.errorMessage = 'Sign-up failed. Please try again.';
          }
        } else {
          this.errorMessage = 'An unexpected error occurred.';
        }
      console.error('Sign-up failed', error);
    }
  }

}
