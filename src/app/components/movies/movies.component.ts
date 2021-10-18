import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/Movie';
// import { GetDataService } from 'src/app/get-data.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any;

  // constructor(private getDataService: GetDataService) { }

  // ngOnInit(): void {
  //   this.movies = this.getDataService.getMovies();
  // }

  constructor (private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(data => {
      console.log('data :>> ', data);
      this.movies = data;
    });
  }

}
