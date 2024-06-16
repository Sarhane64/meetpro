import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environement.js';
import { AuthService } from '../../service/login.service.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  message: string = 'You are not logged';
  constructor(private http: HttpClient, private authService : AuthService) {}

  ngOnInit() {
    this.http.get(environment.API_URL + 'user', {withCredentials : true}).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(this.authService.getAuth())
    console.log(this.authService.isAuth().subscribe(
      (e) => console.log(e)
    ));
  }
}
