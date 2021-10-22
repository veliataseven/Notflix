import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-select-genre',
  templateUrl: './select-genre.component.html',
  styleUrls: ['./select-genre.component.css']
})
export class SelectGenreComponent implements OnInit {

  selectedGenre!: string;
  @Output() event = new EventEmitter()

  constructor(private moviesService: MoviesService) { }

  selectMovieGenre(event: any) {
    this.selectedGenre = event.target.value;
    this.event.emit(this.selectedGenre);

    // this.selectedGenre = event.target.value;
    // this.moviesService.setMoviesByGenre(this.selectedGenre);
  }

  ngOnInit(): void {
  }

}
