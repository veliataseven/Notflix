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
