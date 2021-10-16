import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/Movie';
import { Movies } from 'src/Movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = Movies;

  constructor() { }

  ngOnInit(): void {
  }

}
