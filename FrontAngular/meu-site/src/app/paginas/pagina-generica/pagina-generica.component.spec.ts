import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGenericaComponent } from './pagina-generica.component';

describe('PaginaGenericaComponent', () => {
  let component: PaginaGenericaComponent;
  let fixture: ComponentFixture<PaginaGenericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaGenericaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
