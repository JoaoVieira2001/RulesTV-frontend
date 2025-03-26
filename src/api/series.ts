import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../auth/auth.service';

export interface Series {
  id?: number;
  title: string;
  description: string;
  language: string;
  number_seasons: number;
  poster: string;
  rating: number;
  releaseDate: string;
  status: string;
  audio: string;
  trailerUrl: string;
  certifications: string;
}

@Injectable({providedIn: 'root'})
export class SeriesAPI{
  private apiUrl = 'http://localhost:8081/api/v1/serie';

  constructor(private http: HttpClient,private authService: AuthService) {}

  private getAuthToken():HttpHeaders{
    return this.authService.getAuthToken();
  }

  getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(`${this.apiUrl}/all`, { headers: this.getAuthToken() });
  }

  getSeriesId(id: number): Observable<Series> {
    return this.http.get<Series>(`${this.apiUrl}/${id}`, { headers: this.getAuthToken() });
  }

  addSerie(serie: Series): Observable<Series> {
    return this.http.post<Series>(`${this.apiUrl}/post`, serie, { headers: this.getAuthToken() });
  }

  updateSerie(id: number, serie: Series): Observable<Series> {
    return this.http.put<Series>(`${this.apiUrl}/put/${id}`, serie, { headers: this.getAuthToken() });
  }

  deleteSerie(id: number): Observable<any> {
    return this.http.delete<Series>(`${this.apiUrl}/delete/${id}`, { headers: this.getAuthToken() });
  }
}
