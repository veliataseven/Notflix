import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/Movie';
import { GetDataService } from 'src/app/get-data.service';
// import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  // data: any = {};

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.movies = this.getDataService.getMovies();
  }

  // constructor (private moviesService: MoviesService) {}

  // ngOnInit(): void {
    //this.data = this.moviesService.getMovies();
    // this.moviesService.getMovies().subscribe(data => {
    //   this.data = data;
    // });
  // }

}
