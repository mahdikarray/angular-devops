import { TestBed } from '@angular/core/testing';

import { ChambreService } from './Chambre.service';

describe('UniversityService', () => {
  let service: ChambreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChambreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
