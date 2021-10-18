import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.css']
})
export class WatchMovieComponent implements OnInit {

  id: String = "hvAL_RMwWfE";
  url: string = "https://www.youtube.com/embed/" + this.id;
  title: String = "Saving Private Ryan";
  genre: String = "action";
  rate: Number = 3;
  detail: String = "Based on a World War II drama. US soldiers try to save their comrade, paratrooper Private Ryan, who's stationed behind enemy lines.";

  constructor() { }

  ngOnInit(): void {
  }

}
