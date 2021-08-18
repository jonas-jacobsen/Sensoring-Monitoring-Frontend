import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloortwoComponent } from './floortwo.component';

describe('FloortwoComponent', () => {
  let component: FloortwoComponent;
  let fixture: ComponentFixture<FloortwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloortwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloortwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
