import { TestBed } from '@angular/core/testing';

import { LoginHomeService } from '../login-home/login-home.service';

describe('LoginHomeService', () => {
  let service: LoginHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
