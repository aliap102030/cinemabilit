import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    {
      id: 1,
      title: 'Interstellar',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPoFi4k7UHwCs31QC5CXreBDRt-Ivof82fSWya3MJhvA&s=10',
      description: 'داستان گروهی از فضانوردان که برای پیدا کردن خانه‌ای جدید برای انسان‌ها سفر می‌کنند.',
      duration: 169,
      genre: 'علمی تخیلی',
      rating: 8.7
    },
    {
      id: 2,
      title: 'Inception',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42MpsAgrw1dBlvBlxBml22hYBfQ541eeI6GL4f3IJUmXEA4TKs1ZNw0sGD2cQs6PgGjdDKA&s=10',
      description: 'یک دزد حرفه‌ای می‌تواند وارد رویاهای دیگران شود و اطلاعات بدزدد.',
      duration: 148,
      genre: 'اکشن',
      rating: 8.8
    },
    {
      id: 3,
      title: 'The Dark Knight',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PhCcXO0pyxx4bXbkEJbCmPNQNj7nmFjdN1gPy0JCsw&s=10',
      description: 'بتمن با یکی از خطرناک‌ترین دشمنان خود، جوکر، روبه‌رو می‌شود.',
      duration: 152,
      genre: 'جنایی',
      rating: 9.0
    }
  ];

getMovies():Movie[]{
return this.movies
}

getMovieById(id:number):Movie|undefined{
return this.movies.find(movie=>movie.id===id)
}
  
}