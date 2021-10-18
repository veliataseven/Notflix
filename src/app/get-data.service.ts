import { Injectable } from '@angular/core';
import { Movie } from 'src/Movie';
import { Movies } from 'src/Movies';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  getMovies(): Movie[] {
    return Movies;
  }

  constructor() { }
}
