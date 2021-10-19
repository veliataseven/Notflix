import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.css']
})
export class WatchMovieComponent implements OnInit {

  movieToBeWatched: any = {};
  pathVariable!: any;
  url: any = "https://www.youtube.com/embed/" + this.pathVariable;

  // id: String = "hvAL_RMwWfE";
  // url: string = "https://www.youtube.com/embed/" + this.id;
  // title: String = "Saving Private Ryan";
  // genre: String = "action";
  // rate: Number = 3;
  // description: String = "Based on a World War II drama. US soldiers try to save their comrade, paratrooper Private Ryan, who's stationed behind enemy lines.";

  // constructor(private getDataService: GetDataService) { }

  // ngOnInit(): void {
  //   this.movies = this.getDataService.getMovies();
  // }

  // constructor (private movieService: MovieService) {}

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.pathVariable = this.route.snapshot.paramMap.get('id');
      console.log(this.pathVariable);
     } );
}

  ngOnInit(): void {
    this.movieService.getMovie(this.pathVariable).subscribe(data => {
      console.log('data :>> ', data);
      this.movieToBeWatched = data;
    });
  }

}
