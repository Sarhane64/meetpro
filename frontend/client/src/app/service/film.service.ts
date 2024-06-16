import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Film } from '../interface/Film.js';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environement.js';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private films: Film[] = [];
  public filmSubject: Subject<Film[]> = new Subject<Film[]>();
  private apiUrl : string = environment.API_URL

  constructor(private http: HttpClient) { }

  emitFilms() {
    this.filmSubject.next(this.films);
  }

  getFilm() { 
    return new Promise((resolve, reject) => {
      this.http.get<Film[]>(
        //  this.apiUrl + 'film' 
        "http://localhost:3000/api/film"
      ).subscribe(
        (response: Film[]) => {
          this.films = response;
          this.emitFilms();
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  
getFilmPipe(search: Partial<Film>) : Observable<Film[]> {
    let params = new HttpParams();

    if (search.name) {
      params = params.append('name', search.name);
    }
    if (search.date) {
      params = params.append('date', search.date.toString());
    }
    if (search.type) {
      params = params.append('type', search.type);
    }
    if (search.rate) {
      params = params.append('rate', search.rate.toString());
    }

    return this.http.get<Film[]>(`${this.apiUrl}/filmpipe`, { params });
}


  // fetchAndEmitFilms() {
  //   this.getFilm().subscribe(films => {
  //     this.filmSubject.next(films);
  //   });
  // }

  // getFilm(): Observable<Film[]> {
  //   return this.http.get<Film[]>(
  //     // this.apiUrl + 'film' 
  //     "http://localhost:3000/api/film"
  //   );
  // }
}
