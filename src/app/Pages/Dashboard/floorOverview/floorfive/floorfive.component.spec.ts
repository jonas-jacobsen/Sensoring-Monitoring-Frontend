import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorfiveComponent } from './floorfive.component';

describe('FloorfiveComponent', () => {
  let component: FloorfiveComponent;
  let fixture: ComponentFixture<FloorfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorfiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
