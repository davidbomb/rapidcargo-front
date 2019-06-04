import { TestBed } from '@angular/core/testing';

import { Mouvement2Service } from './mouvement2.service';

describe('Mouvement2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Mouvement2Service = TestBed.get(Mouvement2Service);
    expect(service).toBeTruthy();
  });
});
