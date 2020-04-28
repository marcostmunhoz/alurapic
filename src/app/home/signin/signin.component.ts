import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  private loginForm: FormGroup;
  @ViewChild('username') private usernameInput: ElementRef<HTMLInputElement>;

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

    this.usernameInput.nativeElement.focus();
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
        this.usernameInput.nativeElement.focus();
      });
  }
}
