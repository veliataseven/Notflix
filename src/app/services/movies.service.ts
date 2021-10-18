import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=id&part=liveStreamingDetails&part=localizations&part=player&part=recordingDetails&part=snippet&part=statistics&part=status&part=topicDetails&chart=mostPopular&maxResults=10&key=AIzaSyA5kIjG2Zl6tYu68Squ5RfCConE06IBrEw';

  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get(this.apiUrl);
  }

}
