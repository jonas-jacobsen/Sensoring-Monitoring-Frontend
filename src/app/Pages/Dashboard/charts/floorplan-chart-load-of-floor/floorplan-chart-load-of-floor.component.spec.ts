import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorplanChartLoadOfFloorComponent } from './floorplan-chart-load-of-floor.component';

describe('FloorplanChartLoadOfFloorComponent', () => {
  let component: FloorplanChartLoadOfFloorComponent;
  let fixture: ComponentFixture<FloorplanChartLoadOfFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorplanChartLoadOfFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorplanChartLoadOfFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
