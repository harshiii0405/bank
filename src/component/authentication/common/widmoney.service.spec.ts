import { TestBed } from '@angular/core/testing';

import { WidmoneyService } from './widmoney.service';

describe('WidmoneyService', () => {
  let service: WidmoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidmoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
