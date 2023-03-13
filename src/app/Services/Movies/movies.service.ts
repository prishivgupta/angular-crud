import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Movie } from 'src/app/Models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "https://localhost:7117/api/Movie/";

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error message occured:', error.error.message);
    } else {
      console.error(error.error)
    }
    return throwError('Something happened, please try again');
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + 'GetAllMovies').pipe(catchError(this.handleError))
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + `GetMovieById/${id}`)
  }

  addMovie(genre: Movie): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AddMovie', genre)
  }

  updateMovie(genre: Movie): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'UpdateMovie', genre)
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `DeleteMovie?id=${id}`)
  }

}
