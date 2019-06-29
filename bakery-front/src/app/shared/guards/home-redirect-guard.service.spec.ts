import { TestBed } from '@angular/core/testing';

import { HomeRedirectGuardService } from './home-redirect-guard.service';

describe('HomeRedirectGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeRedirectGuardService = TestBed.get(HomeRedirectGuardService);
    expect(service).toBeTruthy();
  });
});
