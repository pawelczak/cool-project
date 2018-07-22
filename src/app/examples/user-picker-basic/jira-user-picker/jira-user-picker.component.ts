import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../../lib/user-picker/services/users.service';
import { JiraUsersService } from '../../../platforms/jira/user-picker/jira-users.service';

@Component({
  selector: 'app-jira-user-picker',
  templateUrl: './jira-user-picker.component.html',
  providers: [
    { provide: UsersService, useClass: JiraUsersService }
  ]
})
export class JiraUserPickerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
