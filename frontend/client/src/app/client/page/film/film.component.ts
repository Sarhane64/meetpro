import { Component } from '@angular/core';
import { Film } from '../../../interface/Film.js';
import { FilmService } from '../../../service/film.service.js';
import { Subscription, combineLatest, startWith, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  public filmData!: Subscription; // Subscription pour gérer le flux de données des films
  public data: Film[] = []; // Tableau pour stocker les données des films récupérées

  constructor(private filmService: FilmService, private fb: FormBuilder) {}

  // Définition du formulaire de recherche avec des champs réactifs
  search = this.fb.nonNullable.group({
    name: [''], // Champ de recherche pour le nom du film
    date: [''], // Champ de recherche pour la date du film
    type: [''], // Champ de recherche pour le type du film
    rate: [''] // Champ de recherche pour la note du film
  });
  
  // Observable qui contient les données des films, initialisé par l'appel de getFilmPipe()
  film$: Observable<Film[]> = this.getFilmPipe();

  // Méthode pour récupérer les données des films en fonction des valeurs du formulaire
  private getFilmPipe(): Observable<Film[]> {
    // Combine les dernières valeurs des champs du formulaire en un seul flux
    const search$ = combineLatest([
      this.search.controls.name.valueChanges.pipe(startWith('')), // Commence avec une chaîne vide pour le champ name
      this.search.controls.date.valueChanges.pipe(startWith('')), // Commence avec une chaîne vide pour le champ date
      this.search.controls.type.valueChanges.pipe(startWith('')), // Commence avec une chaîne vide pour le champ type
      this.search.controls.rate.valueChanges.pipe(startWith('')) // Commence avec une chaîne vide pour le champ rate
    ]);

    // Utilise switchMap pour basculer vers un nouvel observable chaque fois que les valeurs du formulaire changent
    return search$.pipe(
      switchMap(([name, date, type, rate]) => {
        // Appel du service filmService.getFilmPipe avec les critères de recherche
        return this.filmService.getFilmPipe({
          name: name || undefined, // Utilise undefined si le nom est une chaîne vide
          date: date ? Number(date) : undefined, // Convertit la date en nombre si elle n'est pas vide
          type: type || undefined, // Utilise undefined si le type est une chaîne vide
          rate: rate ? Number(rate) : undefined // Convertit la note en nombre si elle n'est pas vide
        });
      })
    );
  }
}
  // Les méthodes ngOnInit et ngOnDestroy sont commentées mais peuvent être utilisées pour gérer les abonnements manuellement
  // ngOnInit() {
  //   this.filmData = this.filmService.filmSubject.subscribe((films: Film[]) => {
  //     this.data = films;
  //     console.log(this.data, 'filmdata');
  //   });

  //   this.filmService.getFilm()
  //     .then(() => {
  //       console.log('Films fetched successfully');
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching films:', error);
  //     });
  // }

  // ngOnDestroy() {
  //   if (this.filmData) {
  //     this.filmData.unsubscribe();
  //   }
  // }
