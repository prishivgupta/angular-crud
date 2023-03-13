import { Component } from '@angular/core';
import { Movie } from 'src/app/Models/Movie';
import { MoviesService } from 'src/app/Services/Movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor(private movieService: MoviesService) {}

  movies: Movie[] = [];
  id?: number;
  

  getAllMovies(): void {
    this.movieService.getAllMovies().subscribe(movies => this.movies = movies);
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id).subscribe(() => this.getAllMovies());
  }

  ngOnInit(): void {
    this.getAllMovies();
  }

}
