import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { estimateCard } from '../interface/EstimateCard.js';
import { environment } from '../../../environement.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstimateService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getEstimateCard(): Observable<estimateCard[]> {
    return this.http.get<estimateCard[]>('http://localhost:3000/api/estimate');
  }
  // getEstimateCard() {
  //   return this.http.get<estimateCard[]>(`${this.apiUrl}estimate`);
  // }
}
