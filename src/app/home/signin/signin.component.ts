import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: AuthService) { }

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
      .subscribe(console.log);
  }
}
