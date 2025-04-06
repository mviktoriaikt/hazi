import { TestBed } from '@angular/core/testing';

import { KutyaService } from './kutya.service';

describe('KutyaService', () => {
  let service: KutyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KutyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
