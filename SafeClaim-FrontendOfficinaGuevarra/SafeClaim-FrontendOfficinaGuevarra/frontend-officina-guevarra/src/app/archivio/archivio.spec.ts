import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Archivio } from './archivio';

describe('Archivio', () => {
  let component: Archivio;
  let fixture: ComponentFixture<Archivio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Archivio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Archivio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
