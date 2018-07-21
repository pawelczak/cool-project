import { TestBed, inject } from '@angular/core/testing';

import { TrelloUsersService } from './trello-users.service';

describe('TrelloUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrelloUsersService]
    });
  });

  it('should be created', inject([TrelloUsersService], (service: TrelloUsersService) => {
    expect(service).toBeTruthy();
  }));
});
