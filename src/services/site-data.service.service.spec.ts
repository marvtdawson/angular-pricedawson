import { TestBed, inject } from '@angular/core/testing';

import { SitData.ServiceService } from './sit-data.service.service';

describe('SitData.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SitData.ServiceService]
    });
  });

  it('should be created', inject([SitData.ServiceService], (service: SitData.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
