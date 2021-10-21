import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteGenericoComponent } from './site-generico.component';

describe('SiteGenericoComponent', () => {
  let component: SiteGenericoComponent;
  let fixture: ComponentFixture<SiteGenericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteGenericoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
