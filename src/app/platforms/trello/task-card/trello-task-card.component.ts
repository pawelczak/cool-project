import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trello-task-card',
  templateUrl: './trello-task-card.component.html',
  styleUrls: ['./trello-task-card.component.css']
})
export class TrelloTaskCardComponent implements OnInit {

  constructor(@Inject('task') public task: any) {}

  ngOnInit() {
  }

}
