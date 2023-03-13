import { Component } from '@angular/core';
import { Movie } from 'src/app/Models/Movie';
import { MoviesService } from 'src/app/Services/Movies/movies.service';
import { Location } from '@angular/common';
import { Genre } from 'src/app/Models/Genre';
import { GenresService } from 'src/app/Services/Genres/genres.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  constructor(private movieService: MoviesService, private genreService: GenresService, private location: Location) {}

  movie: Movie = {
    genreId: 0,
    movieId: 0,
    movieName: ''
  };

  genres: Genre[] = [];

  goBack(): void {
    this.location.back();
  }

  addMovie(movie: Movie): void {
    this.movieService.addMovie(movie).subscribe(() => this.goBack());
  }

  getAllGenres(): void {
    this.genreService.getAllGenres().subscribe(genres => this.genres = genres);
  }

  ngOnInit(): void {
    this.getAllGenres();
  }

}
