import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficinaDashboard } from './officina-dashboard';

describe('OfficinaDashboard', () => {
  let component: OfficinaDashboard;
  let fixture: ComponentFixture<OfficinaDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficinaDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficinaDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
