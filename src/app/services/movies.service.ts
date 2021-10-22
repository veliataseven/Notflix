import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/Movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies!: any;
  filteredMovies!: any;

  constructor(private httpClient: HttpClient) {}

  setMoviesByGenre(genre: string) {
    console.log('genre :>> ', genre);

    if (genre === 'Filter With Movie Genres' || genre === 'all genres') {
      this.filteredMovies = this.movies;
      console.log('this.filteredMovies :>> ', this.filteredMovies);
    } else {
      this.filteredMovies = this.movies.filter((movie: any) => {
        return movie.genre === genre;
      });
      console.log('this.filteredMovies :>> ', this.filteredMovies);
    }
  }

  getFilteredMovies() {
    return this.filteredMovies;
  }

  getMovies() {
    this.movies = this.httpClient.get<Movie[]>(
      'http://localhost:8080/api/movie/'
    );

    this.movies.subscribe((data: any) => {
      this.movies = data;
    });

    return this.movies;
  }
}
