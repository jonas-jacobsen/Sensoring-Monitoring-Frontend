import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorogComponent } from './floorog.component';

describe('FloorogComponent', () => {
  let component: FloorogComponent;
  let fixture: ComponentFixture<FloorogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
