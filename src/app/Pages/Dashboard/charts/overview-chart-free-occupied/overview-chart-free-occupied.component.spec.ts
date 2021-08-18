import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewChartFreeOccupiedComponent } from './overview-chart-free-occupied.component';

describe('OverviewChartFreeOccupiedComponent', () => {
  let component: OverviewChartFreeOccupiedComponent;
  let fixture: ComponentFixture<OverviewChartFreeOccupiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewChartFreeOccupiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewChartFreeOccupiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
