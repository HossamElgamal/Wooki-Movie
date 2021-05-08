import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.categoredMovies$.subscribe(res => {
      let x = res

      console.log(x);
    })

  }

}
