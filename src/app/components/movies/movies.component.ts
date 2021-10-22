import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Movie } from 'src/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnChanges {

  movies!: Movie[];
  selectedGenre!: string;

  constructor (private moviesService: MoviesService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.movies) {

    }
  }

  getFilteredMovies($event: any) {
    this.selectedGenre = $event;
    console.log('this.selectedGenre :>> ', this.selectedGenre);
    this.moviesService.setMoviesByGenre(this.selectedGenre);
    this.movies = this.moviesService.getFilteredMovies();
  }

  ngOnInit(): void {
   this.moviesService.getMovies().subscribe((data: any)=> {
      this.movies = data;
    });
  }

}
