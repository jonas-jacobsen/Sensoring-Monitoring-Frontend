import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorthreeComponent } from './floorthree.component';

describe('FloorthreeComponent', () => {
  let component: FloorthreeComponent;
  let fixture: ComponentFixture<FloorthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
