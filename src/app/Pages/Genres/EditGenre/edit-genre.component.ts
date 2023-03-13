import { Component } from '@angular/core';
import { Genre } from 'src/app/Models/Genre';
import { GenresService } from 'src/app/Services/Genres/genres.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent {

  constructor(private genreService: GenresService, private location: Location, private route: ActivatedRoute) {}

  genre: Genre = {
    genreId: 0,
    genreName: ''
  };

  goBack(): void {
    this.location.back();
  }

  editGenre(genre: Genre): void {
    this.genreService.updateGenre(genre).subscribe(() => this.goBack());
  }

  getGenreById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.genreService.getGenreById(id).subscribe(genre => {
      this.genre.genreId = genre.genreId,
      this.genre.genreName = genre.genreName
    });
  }

  ngOnInit(): void {
    this.getGenreById()
  }

}
