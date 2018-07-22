import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { UserPickerModule } from './lib/user-picker/user-picker.module';

import { UserPickerExampleComponent } from './examples/user-picker-example/user-picker-example.component';
import { UserPickerBasicComponent } from './examples/user-picker-basic/user-picker-basic.component';
import { TrelloUserPickerComponent } from './examples/user-picker-basic/trello-user-picker/trello-user-picker.component';
import { JiraUserPickerComponent } from './examples/user-picker-basic/jira-user-picker/jira-user-picker.component';
import { UserPickerBasicModule } from './examples/user-picker-basic/user-picker-basic.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    UserPickerBasicModule,
    UserPickerModule.forPlatform()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
