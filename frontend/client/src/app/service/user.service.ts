import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interface/User.js';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  fetchProfiles(): Observable<user[]> {
    return this.http.get<user[]>('http://localhost:3000/api/user');
  }
  postProfiles(user: user): Observable<user[]> {
    return this.http.post<user[]>('http://localhost:3000/api/user', user);
  }
  deleteProfiles(id: string) {
    return this.http.delete(`http://localhost:3000/api/deleteuser/${id}`);
  }
  // putProfiles(id: string, userData: user) {
  //   return this.http.put(`http://localhost:3000/api/putuser:${id}`, userData);
  // }
}
