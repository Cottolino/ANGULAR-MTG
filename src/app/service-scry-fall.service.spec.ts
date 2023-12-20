import { TestBed } from '@angular/core/testing';

import { ServiceScryFallService } from './service-scry-fall.service';

describe('ServiceScryFallService', () => {
  let service: ServiceScryFallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceScryFallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
