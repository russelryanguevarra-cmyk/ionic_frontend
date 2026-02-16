import { TestBed } from '@angular/core/testing';

import { OfficinaDashboardComponent } from '../components/officina-dashboard/officina-dashboard';

describe('Officina', () => {
  let service: OfficinaDashboardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficinaDashboardComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
