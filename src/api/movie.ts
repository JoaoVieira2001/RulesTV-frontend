import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../auth/auth.service';

export interface Movies {
  id?: number;
  title: string;
  description: string;
  releaseDate: string;
  runtime: number;
  durationMinutes: number;
  audio: string;
  subtitle: string;
  rating: string;
  poster: string;
  trailerUrl: string;
  certifications: string;
}

@Injectable({providedIn: 'root'})
export class MoviesAPI{
  private apiUrl = 'http://localhost:8081/api/v1/movie';

  constructor(private http: HttpClient,private authService: AuthService) {}

  private getAuthToken():HttpHeaders{
    return this.authService.getAuthToken();
  }

  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${this.apiUrl}/all`, { headers: this.getAuthToken() });
  }

  getMovieId(id: number): Observable<Movies> {
    return this.http.get<Movies>(`${this.apiUrl}/${id}`, { headers: this.getAuthToken() });
  }

  addMovie(movie: Movies): Observable<Movies> {
    return this.http.post<Movies>(`${this.apiUrl}/post`, movie, { headers: this.getAuthToken() });
  }

  updateMovie(id: number, movie: Movies): Observable<Movies> {
    return this.http.put<Movies>(`${this.apiUrl}/put/${id}`, movie, { headers: this.getAuthToken() });
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete<Movies>(`${this.apiUrl}/delete/${id}`, { headers: this.getAuthToken() });
  }
}

