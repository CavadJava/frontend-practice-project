import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Movie } from 'src/app/model/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] | undefined
  movie: Movie | undefined
  movieMessage: string | undefined
  constructor(private moviesService: MoviesService, private router: Router){

  }
  ngOnInit() : void {
    this.list();
    console.log("hello");
  }
  list() {
    this.moviesService.getMoviesList().subscribe((result)=>{
      this.movies = result
    });
  }


  submit(data: Movie) : void {
    console.log(data)
    this.moviesService.addMovie(data).subscribe(result=>{
      if(result) {
        this.movieMessage = "Successfull movie added" 
      }
    })
    setTimeout(()=>{
      this.movieMessage=undefined
      this.list()
      this.router.navigate(['entertainments/movies'])
    }, 3000)

  }

  
  removeMovie(data: Movie): void {
    console.log(data)
    this.moviesService.removeMovie(data).subscribe((result)=>{
      if(result && result!=null) {
        this.movieMessage = "Successfull movie deleted" 
        this.list()
      }
    });
  }
}
