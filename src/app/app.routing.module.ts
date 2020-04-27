import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photos-list.resolver';
import { PhotoListModule } from './photos/photo-list/photo-list.module';
import { PhotoFormModule } from './photos/photo-form/photo-form.module';
import { ErrorsModule } from './errors/errors.module';

const routes : Routes = [
  {
    path: 'user/:username/photos',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  {
    path: 'user/:username/photos/add',
    component: PhotoFormComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PhotoListModule,
    PhotoFormModule,
    ErrorsModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
