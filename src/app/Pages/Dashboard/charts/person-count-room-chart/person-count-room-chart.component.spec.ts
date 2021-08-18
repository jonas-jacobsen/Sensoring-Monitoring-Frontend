import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCountRoomChartComponent } from './person-count-room-chart.component';

describe('PersonCountRoomChartComponent', () => {
  let component: PersonCountRoomChartComponent;
  let fixture: ComponentFixture<PersonCountRoomChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCountRoomChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCountRoomChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
