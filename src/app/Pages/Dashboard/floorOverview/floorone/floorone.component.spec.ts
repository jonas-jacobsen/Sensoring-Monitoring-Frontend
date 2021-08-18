import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooroneComponent } from './floorone.component';

describe('FlooroneComponent', () => {
  let component: FlooroneComponent;
  let fixture: ComponentFixture<FlooroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlooroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlooroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
