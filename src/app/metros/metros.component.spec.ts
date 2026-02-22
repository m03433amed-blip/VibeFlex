import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetrosComponent } from './metros.component';

describe('MetrosComponent', () => {
  let component: MetrosComponent;
  let fixture: ComponentFixture<MetrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
