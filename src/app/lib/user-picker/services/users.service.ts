import { Observable } from 'rxjs';

import { User } from '../model/user';

export abstract class UsersService {

  abstract getUsers(): Observable<Array<User>>;

}
