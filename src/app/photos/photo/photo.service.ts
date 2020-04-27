import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(username: string, page: number = 1) : Observable<Photo[]> {
    const params = new HttpParams()
      .append('page', page.toString());

    return this.http
      .get<Photo[]>(`${environment.api_url}/${username}/photos`, { params });
  }
}
