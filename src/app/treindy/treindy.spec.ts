import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treindy } from './treindy';

describe('Treindy', () => {
  let component: Treindy;
  let fixture: ComponentFixture<Treindy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Treindy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Treindy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
