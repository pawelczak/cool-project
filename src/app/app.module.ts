import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { UserPickerModule } from './lib/user-picker/user-picker.module';

import { UserPickerExampleComponent } from './examples/user-picker-example/user-picker-example.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPickerExampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UserPickerModule.forPlatform()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
