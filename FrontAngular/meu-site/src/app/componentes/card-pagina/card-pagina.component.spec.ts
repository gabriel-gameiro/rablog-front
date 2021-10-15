import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaginaComponent } from './card-pagina.component';

describe('CardPaginaComponent', () => {
  let component: CardPaginaComponent;
  let fixture: ComponentFixture<CardPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
