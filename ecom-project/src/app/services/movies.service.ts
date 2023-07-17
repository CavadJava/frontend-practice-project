import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {}

  getMoviesList() : Observable<Movie[]>{
    return this.httpClient.get<Movie[]>("http://localhost:3000/movies");
  }
  addMovie(data: Movie) {
    return this.httpClient.post<Movie>("http://localhost:3000/movies", data)
  }
  removeMovie(data: Movie) {
    return this.httpClient.delete(`http://localhost:3000/movies/${data.id}`)
  }
}
