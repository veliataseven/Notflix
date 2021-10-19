import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // movieId!: string;

  constructor(private httpClient: HttpClient) { }

  getMovie(id: string) {
    return this.httpClient.get('http://localhost:8080/api/movie/' + id);
  }

}
