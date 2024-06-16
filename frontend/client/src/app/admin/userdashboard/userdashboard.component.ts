import { Component } from '@angular/core';
import { user } from '../../interface/User';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service.js';

@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css',
})
export class UserdashboardComponent {
  users: any[] = [];
  userForm: user = {
    name: '',
    email: '',
    password: '',
  };
  constructor(private UserService: UserService) {}

  ngOnInit() {
    this.OnTest();
  }
  OnTest() {
    this.UserService.fetchProfiles().subscribe((e) => {
      this.users = e;
    });
  }
  onSubmit(user: user) {
    this.UserService.postProfiles(user).subscribe((newUser) => {
      this.OnTest();
      console.log('supression');
    });
  }
  onDelete(user: any) {
    this.UserService.deleteProfiles(user._id).subscribe((newUser) => {
      this.OnTest();
      console.log('suppression');
    });
  }
}
