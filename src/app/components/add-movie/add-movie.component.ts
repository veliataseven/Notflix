import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/Movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  
  id!: string;
  title!: string;
  genre!: string;
  rate!: number;
  description!: string;

  movie!: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  saveMovie() {

    this.movie = {
      id:  this.id,
      title: this.title,
      genre: this.genre,
      rate: this.rate,
      description: this.description
    }

    this.movieService.postMovie(this.movie).subscribe((data) => {
      console.log('data :>> ', data);
    });
  }
}