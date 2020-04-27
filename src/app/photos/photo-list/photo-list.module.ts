import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotoComponent } from '../photo/photo.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterBy } from './filter-by.pipe';
import { PhotosComponent } from './photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFieldComponent } from './search-field/search-field.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
  ],
  declarations: [
    PhotoComponent,
    PhotosComponent,
    PhotoListComponent,
    LoadButtonComponent,
    FilterBy,
    SearchFieldComponent,
  ],
})
export class PhotoListModule { }
