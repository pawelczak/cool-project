import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UsersService } from '../../../lib/user-picker/services/users.service';
import { TrelloUser } from './trello-user';

@Injectable()
export class TrelloUsersService extends UsersService {

  constructor() {
    super();
  }

  getUsers(): Observable<Array<TrelloUser>> {
    return of([
      new TrelloUser('1', 'Bruce', 'Wayne'),
      new TrelloUser('2', 'Clark', 'Kent')
    ]);
  }


}
