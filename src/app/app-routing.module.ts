import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';
import { AddGenreComponent } from './Pages/Genres/AddGenre/add-genre.component';
import { EditGenreComponent } from './Pages/Genres/EditGenre/edit-genre.component';
import { GenresComponent } from './Pages/Genres/Genres/genres.component';
import { LoginComponent } from './Pages/Login/login.component';
import { AddMovieComponent } from './Pages/Movies/AddMovie/add-movie.component';
import { EditMovieComponent } from './Pages/Movies/EditMovie/edit-movie.component';
import { MoviesComponent } from './Pages/Movies/Movies/movies.component';
import { ViewMovieComponent } from './Pages/Movies/ViewMovie/view-movie.component';

const routes: Routes = [
  { path:'', redirectTo:'movies', pathMatch:'full' },
  { path:'login', component: LoginComponent },
  { path:'genres', component: GenresComponent, canActivate: [AuthGuard] },
  { path:'genres/addGenre', component: AddGenreComponent, canActivate: [AuthGuard] },
  { path:'genres/updateGenre/:id', component: EditGenreComponent, canActivate: [AuthGuard] },
  { path:'movies', component: MoviesComponent, canActivate: [AuthGuard] },
  { path:'movies/viewMovie/:id', component: ViewMovieComponent, canActivate: [AuthGuard] },
  { path:'movies/addMovie', component: AddMovieComponent, canActivate: [AuthGuard] },
  { path:'movies/updateMovie/:id', component: EditMovieComponent, canActivate: [AuthGuard] },
  { path:'**', redirectTo:'movies' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
