import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this
      .formBuilder
      .group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  login() {
    this
      .service
      .authenticate(
        this.loginForm.get('username').value,
        this.loginForm.get('password').value,
      )
      .subscribe((user) => {
        this.router.navigateByUrl(`user/${user.name}/photos`);
      }, err => {
        console.error('Erro na autenticação', err);
        this.loginForm.reset();
      });
  }
}
