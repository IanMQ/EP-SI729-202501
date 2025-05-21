import { TestBed } from '@angular/core/testing';

import { RecidarService } from './recidar.service';

describe('RecidarService', () => {
  let service: RecidarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecidarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
