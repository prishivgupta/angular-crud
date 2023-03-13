import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Genre } from 'src/app/Models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "https://localhost:7117/api/Genre/";

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.baseUrl + 'GetAllGenres')
  }

  getGenreById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + `GetGenreById/${id}`)
  }

  addGenre(genre: Genre): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AddGenre', genre)
  }

  updateGenre(genre: Genre): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'UpdateGenre', genre)
  }

  deleteGenre(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `DeleteGenre?id=${id}`)
  }
}
