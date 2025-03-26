import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, of, tap} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router:Router) {}
  private authUrl = 'http://localhost:8081/api/v1/auth';

  login(email: string, password: string) {
    return this.http.post(`${this.authUrl}/login`, { email, password }).subscribe((response: any) => {
      if (response.token) {
        localStorage.setItem('user', JSON.stringify(response));
      }
    });
  }

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

   getAuthToken():HttpHeaders{
    const userInfo = JSON.parse(localStorage.getItem('user') || '{}');
    const token = userInfo.token;
    const email = userInfo.email;
    console.log(token);
    console.log(email);

    if (token) {
      return new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
    }
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  isAdmin(): boolean{
    const userInfo = JSON.parse(localStorage.getItem('user')|| '{}')
    return userInfo.role === 'ADMIN';
  }

  isLoggedIn(): boolean{
    const userInfo = JSON.parse(localStorage.getItem('user') || '{}');
    return !!userInfo.token;
  }
}
