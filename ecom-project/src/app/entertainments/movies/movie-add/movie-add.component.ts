import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit{
  movie: Movie | undefined
  movieMessage: string | undefined

  constructor(private movieService: MoviesService, private router: Router) {}

  ngOnInit(): void {
  }

  submit(data: Movie) : void {
    console.log(data)
    this.movieService.addMovie(data).subscribe(result=>{
      if(result) {
        this.movieMessage = "Successfull movie added" 
      }
    })
    setTimeout(()=>{
      this.movieMessage=undefined
      this.router.navigate(['entertainments/movies'])
    }, 3000)

  }

}
