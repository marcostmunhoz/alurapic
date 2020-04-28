import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private client: HttpClient) { }

  authenticate(userName: string, password: string): Observable<User> {
    return this
      .client
      .post<User>(`${environment.api_url}/user/login`, {
        userName,
        password
      });
  }
}
