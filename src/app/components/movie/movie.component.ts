import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  @Input()
  movie!: Movie;

  constructor() { }

}
