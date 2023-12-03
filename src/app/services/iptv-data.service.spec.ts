import { TestBed } from '@angular/core/testing';

import { IptvDataService } from './iptv-data.service';

describe('IptvDataService', () => {
  let service: IptvDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IptvDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
