import { Component, input } from '@angular/core';
import { Movie } from '../../../core/models/movie.model';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {

  movie = input.required<Movie>();

}