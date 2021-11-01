import { Component, OnInit} from '@angular/core';
import { Movie } from 'src/Movie';
import { MoviesService } from 'src/app/services/movies.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies!: Movie[];
  selectedGenre!: string;
  isLogedIn!:boolean;

  constructor (private moviesService: MoviesService, private loginService: LoginService) {}

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

    this.loginService.getLogedIn().subscribe(data => this.isLogedIn = data);
    console.log('this.isLogedIn in Movies Component:>> ', this.isLogedIn);
  }

}
