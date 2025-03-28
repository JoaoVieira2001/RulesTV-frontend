import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../auth/auth.service';

export interface User {
  id: number;
  email: string;
  add : string;
  password: string;
  role: string;
  fullName: string;
  profile_picture: string;
  phone_number: string;
}

@Injectable({providedIn: 'root'})
export class userAuthAPI{
  private apiUrl = 'http://localhost:8081/api/v1/auth/user';
  private signUpUrl = 'http://localhost:8081/api/v1/auth/signup';

  constructor(private http: HttpClient,private authService: AuthService) {}

  private getAuthToken():HttpHeaders{
    return this.authService.getAuthToken();
  }


  getAllUsers(): Observable<User[]> {
    if(!this.authService.isAdmin()){
      throw new Error("Unauthorized: Only admins can access this endpoint.");
    }
    return this.http.get<User[]>(`${this.apiUrl}/all`, { headers: this.getAuthToken() });
  }

  getUserId(id: number): Observable<User> {
    if(!this.authService.isAdmin()){
      throw new Error("Unauthorized: Only admins can access this endpoint.");
    }
    return this.http.get<User>(`${this.apiUrl}/${id}`, { headers: this.getAuthToken() });
  }

  promoteUserToAdmin(email: string): Observable<User> {
    if (!this.authService.isAdmin()) {
      throw new Error("Unauthorized: Only admins can access this endpoint.");
    }
    return this.http.post<User>(`${this.apiUrl}/promote/${email}`, {}, { headers: this.getAuthToken() });
  }

  addUser(user: { fullName: string; phone_number: string; email: string; password: string }): Observable<any> {
    if (!this.authService.isAdmin()) {
      throw new Error('Unauthorized: Only admins can add users.');
    }
    return this.http.post(this.signUpUrl, user, { headers: this.getAuthToken() });
  }

  deleteUser(id:number): Observable<User[]> {
    if(!this.authService.isAdmin()){
      throw new Error("Unauthorized: Only admins can access this endpoint.");
    }
    return this.http.delete<User[]>(`${this.apiUrl}/delete/${id}`, { headers: this.getAuthToken() });
  }
}
