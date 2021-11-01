import { Component, OnInit} from '@angular/core';
import { Movie } from 'src/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies!: Movie[];
  selectedGenre!: string;

  constructor (private moviesService: MoviesService) {}

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
