import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from 'src/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // movieId!: string;

  constructor(private httpClient: HttpClient) { }

  getMovie(id: string) {
    return this.httpClient.get('http://localhost:8080/api/movie/' + id);
  }

  postMovie(movie: Movie) {
    return this.httpClient.post('http://localhost:8080/api/movie/', movie);
  }

}
