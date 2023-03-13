import { Component } from '@angular/core';
import { Movie } from 'src/app/Models/Movie';
import { MoviesService } from 'src/app/Services/Movies/movies.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GenresService } from 'src/app/Services/Genres/genres.service';
import { Genre } from 'src/app/Models/Genre';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent {

  constructor(private movieService: MoviesService, private genreService: GenresService, private location: Location, private route: ActivatedRoute) {}

  movie: Movie = {
    genreId: 0,
    movieId: 0,
    movieName: ''
  };
  
  genres: Genre[] = [];

  goBack(): void {
    this.location.back();
  }

  editMovie(genre: Movie): void {
    this.movieService.updateMovie(genre).subscribe(() => this.goBack());
  }

  getMovieById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieById(id).subscribe(movie => {
      this.movie.genreId = movie.genreId,
      this.movie.movieId = movie.movieId,
      this.movie.movieName = movie.movieName
    });
  }

  getAllGenres(): void {
    this.genreService.getAllGenres().subscribe(genres => this.genres = genres);
  }

  ngOnInit(): void {
    this.getMovieById();
    this.getAllGenres();
  }

}
