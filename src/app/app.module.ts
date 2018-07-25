import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { UserPickerModule } from './lib/user-picker/user-picker.module';
import { UserPickerBasicModule } from './examples/user-picker-basic/user-picker-basic.module';
import { UserPickerAdvancedModule } from './examples/user-picker-advanced/user-picker-advanced.module';
import { TrelloTaskExampleModule } from './examples/trello-task-example/trello-task-example.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    UserPickerBasicModule,
    UserPickerAdvancedModule,
    UserPickerModule.forPlatform(),
    TrelloTaskExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
