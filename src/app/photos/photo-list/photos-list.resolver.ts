import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(private service: PhotoService) { }

  resolve(snapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this
      .service
      .listFromUser(snapshot.paramMap.get('username'));
  }
}
