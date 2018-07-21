import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from './services/users.service';
import { User } from './model/user';

@Component({
  selector: 'app-user-picker',
  templateUrl: './user-picker.component.html',
  styleUrls: ['./user-picker.component.css']
})
export class UserPickerComponent implements OnInit {

  users$: Observable<Array<User>>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }

}
