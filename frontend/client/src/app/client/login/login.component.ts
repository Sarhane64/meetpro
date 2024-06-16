import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected from styleUrl to styleUrls
})
export class LoginComponent{ // Implement OnInit
  fb = inject(FormBuilder);
  public loginForm!: FormGroup;

  constructor( private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.init();
    console.log(this.authService.getAuth());
    console.log(this.authService.isAuth().subscribe(
      (e) => console.log(e)
    ));
  }

  init() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    // stocker la valeur du formulaire 
    const formValue = this.loginForm.value;

    const connexion = { email: formValue['email'], password: formValue['password'] , };

    this.authService.login(connexion.email, connexion.password)
      .then((res) => {
        this.loginForm.reset();
        this.router.navigate(['/home/estimate']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
