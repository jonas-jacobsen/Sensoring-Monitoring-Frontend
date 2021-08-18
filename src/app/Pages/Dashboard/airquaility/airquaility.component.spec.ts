import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirquailityComponent } from './airquaility.component';

describe('AirquailityComponent', () => {
  let component: AirquailityComponent;
  let fixture: ComponentFixture<AirquailityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirquailityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirquailityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
