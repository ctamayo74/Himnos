import { TestBed } from '@angular/core/testing';

import { HimnosService } from './himnos.service';

describe('HimnosService', () => {
  let service: HimnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HimnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
