import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenresComponent } from './Pages/Genres/Genres/genres.component';
import { MoviesComponent } from './Pages/Movies/Movies/movies.component';
import { NavbarComponent } from './Components/Navbar/navbar.component';
import { AddGenreComponent } from './Pages/Genres/AddGenre/add-genre.component';
import { EditGenreComponent } from './Pages/Genres/EditGenre/edit-genre.component';
import { FooterComponent } from './Components/Footer/footer.component';
import { LoginComponent } from './Pages/Login/login.component';
import { AddMovieComponent } from './Pages/Movies/AddMovie/add-movie.component';
import { EditMovieComponent } from './Pages/Movies/EditMovie/edit-movie.component';
import { ViewMovieComponent } from './Pages/Movies/ViewMovie/view-movie.component';
import { SidebarComponent } from './Components/Sidebar/sidebar.component';
import { SidebarModule } from 'ng-cdbangular';
import { AuthInterceptor } from './Interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    MoviesComponent,
    NavbarComponent,
    AddGenreComponent,
    EditGenreComponent,
    FooterComponent,
    LoginComponent,
    AddMovieComponent,
    EditMovieComponent,
    ViewMovieComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SidebarModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
