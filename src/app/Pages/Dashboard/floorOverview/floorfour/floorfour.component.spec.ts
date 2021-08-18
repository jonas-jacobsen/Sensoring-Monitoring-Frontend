import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorfourComponent } from './floorfour.component';

describe('FloorfourComponent', () => {
  let component: FloorfourComponent;
  let fixture: ComponentFixture<FloorfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
