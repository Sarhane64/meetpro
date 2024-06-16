import { Routes } from '@angular/router';
import { HomeComponent } from './client/home/home.component.js';
import { EstimateComponent } from './client/page/estimate/estimate.component.js';
import { BathroomComponent } from './client/page/bathroom/bathroom.component.js';
import { LoginComponent } from './client/login/login.component.js';
import { Component } from '@angular/core';
import { LandingComponent } from './client/page/landing/landing.component.js';
import { authGuard } from './service/auth.guard.js';
import { FilmComponent } from './client/page/film/film.component.js';

export const routes: Routes = [
  {
    path: 'home',
    component : HomeComponent,
    children: [
      {
        path: 'film',
        component: FilmComponent,
      },
      {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'estimate',
        canActivate: [authGuard],
        children: [
          { path: '', component: EstimateComponent },
          { path: 'bathroom', component: BathroomComponent },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '/home' },
];
