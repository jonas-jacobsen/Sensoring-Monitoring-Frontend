import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewChartOfLoadComponent } from './overview-chart-of-load.component';

describe('OverviewChartOfLoadComponent', () => {
  let component: OverviewChartOfLoadComponent;
  let fixture: ComponentFixture<OverviewChartOfLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewChartOfLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewChartOfLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
