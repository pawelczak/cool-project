import { User } from '../../../lib/user-picker/model/user';

export class TrelloUser implements User {

  id: number;

  name: string;

  constructor(trelloId: string,
              firstName: string,
              lastName: string) {
    this.id = +trelloId;
    this.name = firstName + ' ' + lastName;
  }

}
