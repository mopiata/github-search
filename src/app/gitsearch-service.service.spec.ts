import { TestBed } from '@angular/core/testing';

import { GitsearchServiceService } from './gitsearch-service.service';

describe('GitsearchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitsearchServiceService = TestBed.get(GitsearchServiceService);
    expect(service).toBeTruthy();
  });
});
