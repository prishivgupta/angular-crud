import { Component } from '@angular/core';
import { Genre } from 'src/app/Models/Genre';
import { GenresService } from 'src/app/Services/Genres/genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent {

  constructor(private genreService: GenresService) {}

  genres: Genre[] = [];
  id?: number;
  console = console;

  getAllGenres(): void {
    this.genreService.getAllGenres().subscribe(genres => this.genres = genres);
  }

  deleteGenre(id: number): void {
    this.genreService.deleteGenre(id).subscribe(() => this.getAllGenres());
  }

  ngOnInit(): void {
    this.getAllGenres();
  }
}
