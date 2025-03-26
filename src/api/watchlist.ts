import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export interface Watchlist {
  id?: number;
  category: string;
  content_type: string;
  content_id: string;
}

@Injectable({providedIn: 'root'})
export class WatchlistAPI{
  private apiUrl = 'http://localhost:8081/api/v1/library';

  constructor(private http: HttpClient,private authService: AuthService) {}

  private getAuthToken():HttpHeaders{
    return this.authService.getAuthToken();
  }

  getWatchlist(): Observable<Watchlist[]> {
    return this.http.get<Watchlist[]>(`${this.apiUrl}/all`, { headers: this.getAuthToken() });
  }

  getWatchlistId(id: number): Observable<Watchlist> {
    return this.http.get<Watchlist>(`${this.apiUrl}/${id}`, { headers: this.getAuthToken() });
  }

  addWatchlist(watchlist: Watchlist): Observable<Watchlist> {
    return this.http.post<Watchlist>(`${this.apiUrl}/post`, watchlist, { headers: this.getAuthToken() });
  }

  updateWatchlist(id: number, watchlist: Watchlist): Observable<Watchlist> {
    return this.http.put<Watchlist>(`${this.apiUrl}/put/${id}`, watchlist, { headers: this.getAuthToken() });
  }

  deleteWatchlist(id: number): Observable<any> {
    return this.http.delete<Watchlist>(`${this.apiUrl}/delete/${id}`, { headers: this.getAuthToken() });
  }
}
