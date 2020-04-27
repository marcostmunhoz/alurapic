import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit, OnDestroy {
  private photos: Photo[] = [];
  private filter: string = '';
  private debounce: Subject<string> = new Subject<string>();
  private username: string = '';
  private hasMore: boolean = true;
  private page: number = 1;

  constructor(private service: PhotoService, private route: ActivatedRoute) {
    this.username = route.snapshot.paramMap.get('username');
  }

  load() {
    this.service
      .listFromUser(this.username, ++this.page)
      .subscribe(photos => {
        this.photos = this.photos.concat(...photos);
        if (photos.length < environment.per_page) {
          this.hasMore = false;
        }
      });
  }

  ngOnInit() {
    this.photos = this
      .route
      .snapshot
      .data
      .photos;
    this
      .debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
}
