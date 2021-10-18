import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get('http://localhost:8080/api/movie/');
  }

}
