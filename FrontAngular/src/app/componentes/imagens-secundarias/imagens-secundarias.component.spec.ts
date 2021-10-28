import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensSecundariasComponent } from './imagens-secundarias.component';

describe('ImagensSecundariasComponent', () => {
  let component: ImagensSecundariasComponent;
  let fixture: ComponentFixture<ImagensSecundariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagensSecundariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagensSecundariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
