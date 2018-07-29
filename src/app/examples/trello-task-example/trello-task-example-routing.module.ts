import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrelloTaskExampleComponent } from './trello-task-example.component';

const routes: Routes = [
  {
    path: '',
    component: TrelloTaskExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrelloTaskExampleRoutingModule { }
