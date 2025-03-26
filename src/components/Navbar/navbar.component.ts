import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError, of, tap} from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router, private http:HttpClient) {}

  logout() {
    const authToken = localStorage.getItem('authToken');

    this.http.post('http://localhost:8081/api/v1/auth/logout', {}, {
      headers: { Authorization: `Bearer ${authToken}` }
    }).pipe(
      tap(() => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        this.router.navigate(['/sign-in']);
      }),
      catchError(error => {
        console.error('Logout failed:', error);
        return of(null);
      })
    ).subscribe({
      next: () => console.log('Logout successful'),
      error: () => alert('Logout failed. Please try again.'),
      complete: () => console.log('Logout request completed'),
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
