import { Component, inject } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { MovieCard } from '../../shared/components/movie-card/movie-card';
@Component({
  selector: 'app-movies',
  imports: [MovieCard],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  private movieService=inject(MovieService)
  movies=this.movieService.getMovies()
}
