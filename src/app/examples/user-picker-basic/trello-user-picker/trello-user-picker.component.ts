import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../../lib/user-picker/services/users.service';
import { TrelloUsersService } from '../../../platforms/trello/user-picker/trello-users.service';

@Component({
  selector: 'app-trello-user-picker',
  templateUrl: './trello-user-picker.component.html',
  providers: [
    { provide: UsersService, useClass: TrelloUsersService }
  ]
})
export class TrelloUserPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
