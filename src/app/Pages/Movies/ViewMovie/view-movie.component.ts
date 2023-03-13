import { Component } from '@angular/core';
import { Movie } from 'src/app/Models/Movie';
import { MoviesService } from 'src/app/Services/Movies/movies.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent {

  constructor(private movieService: MoviesService, private location: Location, private route: ActivatedRoute) {}

  movie: Movie = {
    genreId: 0,
    movieId: 0,
    movieName: ''
  };

  getMovieById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieById(id).subscribe(movie => {
      this.movie.genreId = movie.genreId,
      this.movie.movieId = movie.movieId,
      this.movie.movieName = movie.movieName
    });
  }

  ngOnInit(): void {
    this.getMovieById();
  }

}
