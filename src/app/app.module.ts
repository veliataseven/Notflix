import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
import { SelectGenreComponent } from './components/select-genre/select-genre.component';
import { WatchMovieComponent } from './components/watch-movie/watch-movie.component';
import { SafePipe } from './pipes/safe.pipe';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from './components/rating/rating.component';
import { PostComponent } from './components/post/post.component';

const appRoutes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'watchmovie/:id', component: WatchMovieComponent }
  // { path: 'watchmovie', component: WatchMovieComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    ButtonComponent,
    SearchComponent,
    SelectGenreComponent,
    WatchMovieComponent,
    SafePipe,
    AddMovieComponent,
    RatingComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
