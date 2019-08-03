import { TestBed } from '@angular/core/testing';

import { ViewallusersService } from './viewallusers.service';

describe('ViewallusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewallusersService = TestBed.get(ViewallusersService);
    expect(service).toBeTruthy();
  });
});
