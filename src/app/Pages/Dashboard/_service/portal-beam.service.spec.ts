import { TestBed } from '@angular/core/testing';

import { PortalBeamService } from './portal-beam.service';

describe('PortalBeamService', () => {
  let service: PortalBeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalBeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
