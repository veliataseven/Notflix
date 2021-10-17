import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.css']
})
export class WatchMovieComponent implements OnInit {

  title: String = "Saving Private Ryan";
  genre: String = "action";
  rate: Number = 3;
  detail: String = "Based on a World War II drama. US soldiers try to save their comrade, paratrooper Private Ryan, who's stationed behind enemy lines.";
  url: String = "https://www.youtube.com/embed/watch?v=_TDNs9Sn3BE";

  constructor() { }

  ngOnInit(): void {
  }

}
