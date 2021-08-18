import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewChartMeetingConfComponent } from './overview-chart-meeting-conf.component';

describe('OverviewChartMeetingConfComponent', () => {
  let component: OverviewChartMeetingConfComponent;
  let fixture: ComponentFixture<OverviewChartMeetingConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewChartMeetingConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewChartMeetingConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
