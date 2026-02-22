import { Component, inject } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MovieInterface } from '../movie-interface.interface';
import { NgClass } from '@angular/common';
import { MetrosComponent } from '../metros/metros.component';

@Component({
  selector: 'app-treindy',
  imports: [NgClass, MetrosComponent],
  templateUrl: './treindy.html',
  styleUrl: './treindy.css',
})
export class Treindy {
  moviesList: MovieInterface[] = [];
  currentMovie?: MovieInterface;
  secMovie?: MovieInterface;
  imageBase: string = 'https://image.tmdb.org/t/p/original';
  private readonly moviesService = inject(MoviesService);
  currentBG: string = '';
  isay7aga: boolean = false;
  bgFading = false;
  ngOnInit(): void {
    this.getmoviesData();
  }
  getmoviesData() {
    this.moviesService.getMovies().subscribe({
      next: (res) => {
        this.moviesList = res.results;
        if (this.moviesList.length) {
          this.currentBG = this.imageBase + this.moviesList[0].backdrop_path;
          this.currentMovie = this.moviesList[0];
        }
      },
      error: (err) => console.log(err),
    });
  }
  setActive(movieId: number) {
    const movie = this.moviesList.find((m) => m.id === movieId);
    if (!movie) return;
    this.currentMovie = movie;
    this.bgFading = true;
    setTimeout(() => {
      this.currentBG = this.imageBase + movie.backdrop_path;
      this.bgFading = false;
    }, 350);
  }
  secsetActive(movieId: number) {
    this.isay7aga = true;
    const movie = this.moviesList.find((m) => m.id === movieId);
    if (!movie) return;
    this.secMovie = movie;
  }
}
