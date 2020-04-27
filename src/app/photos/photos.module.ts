import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { ErrorsModule } from '../errors/errors.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    PhotoListModule,
    PhotoFormModule,
    ErrorsModule,
  ],
})
export class PhotosModule { }
