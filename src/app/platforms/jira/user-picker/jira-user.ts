import { User } from '../../../lib/user-picker/model/user';

export class JiraUser implements User {

  id: number;

  name: string;

  constructor(uid: number,
              name: string) {
    this.id = uid;
    this.name = name;
  }

}
