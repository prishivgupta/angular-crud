import { Component } from '@angular/core';
import { Genre } from 'src/app/Models/Genre';
import { GenresService } from 'src/app/Services/Genres/genres.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent {

  constructor(private genreService: GenresService, private location: Location) {}

  genre: Genre = {
    genreId: 0,
    genreName: ''
  };

  goBack(): void {
    this.location.back();
  }

  addGenre(genre: Genre): void {
    this.genreService.addGenre(genre).subscribe(() => this.goBack());
  }
}
