import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environement.js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
  ) {}

  emitAuth(isAuth: boolean) {
    this.isAuth$.next(isAuth);
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post<{ token: string }>(
        `${environment.API_URL}login`, 
        { email, password },
        { withCredentials: true }
      ).subscribe({
        next: authData => {
          this.emitAuth(true);
          localStorage.setItem('jwt', authData.token);
          console.log(authData.token);       
          resolve(authData);
        },
        error: error => {
          reject(error);
        }
      });
    });
  }

  getAuth() {
    return localStorage.getItem('jwt')
  }
  isAuth() {
    return this.isAuth$.asObservable();
  }
  
}