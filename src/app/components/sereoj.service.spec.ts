import { TestBed } from '@angular/core/testing';

import { SereojService } from './sereoj.service';

describe('SereojService', () => {
  let service: SereojService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SereojService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
