import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UsersService } from '../../../lib/user-picker/services/users.service';
import { JiraUser } from './jira-user';

@Injectable()
export class JiraUsersService extends UsersService {

  constructor() {
    super();
  }

  getUsers(): Observable<Array<JiraUser>> {
    return of([
      new JiraUser(1, 'Peter Parker'),
      new JiraUser(2, 'Bruce Banner')
    ]);
  }


}
