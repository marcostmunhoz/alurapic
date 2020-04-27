import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PhotoListModule } from './photos/photo-list/photo-list.module';
import { PhotoFormModule } from './photos/photo-form/photo-form.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotoListModule,
    PhotoFormModule,
    ErrorsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
