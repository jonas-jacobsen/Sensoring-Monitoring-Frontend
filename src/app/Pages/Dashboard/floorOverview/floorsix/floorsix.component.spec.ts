import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorsixComponent } from './floorsix.component';

describe('FloorsixComponent', () => {
  let component: FloorsixComponent;
  let fixture: ComponentFixture<FloorsixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorsixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
