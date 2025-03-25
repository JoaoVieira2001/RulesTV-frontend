import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id?: number;
  title: string;
  description: string;
  releaseDate: string;
  runtime: string;
  durationMinutes: number;
  audio: string;
  subtitle: string;
  rating: string;
  poster: string;
  trailerUrl: string;
  certifications: string;
}

@Injectable({providedIn: 'root'})
export class MovieAPI{
  private apiUrl = 'http://localhost:8081/api/v1/movie';

  constructor(private http: HttpClient) {}

  private getAuthToken(){
    const token = localStorage.getItem('token');
    console.log(token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    })
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/all`, { headers: this.getAuthToken() });
  }

  getMovieId(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`, { headers: this.getAuthToken() });
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiUrl}/post`, movie, { headers: this.getAuthToken() });
  }

  updateMovie(id: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/put/${id}`, movie, { headers: this.getAuthToken() });
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete<Movie>(`${this.apiUrl}/delete/${id}`, { headers: this.getAuthToken() });
  }
}

