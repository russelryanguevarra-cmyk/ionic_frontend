import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchivioPage } from './archivio.page';

describe('ArchivioPage', () => {
  let component: ArchivioPage;
  let fixture: ComponentFixture<ArchivioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
