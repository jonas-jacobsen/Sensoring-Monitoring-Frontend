import { Component, OnInit } from '@angular/core';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';
import {SensorService} from "../../_service/sensor.service";
import {OverviewData} from "../../../../_interface/OverviewData";
Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);

@Component({
  selector: 'app-floorplan-chart-load-of-floor',
  templateUrl: './floorplan-chart-load-of-floor.component.html',
  styleUrls: ['./floorplan-chart-load-of-floor.component.scss']
})
export class FloorplanChartLoadOfFloorComponent implements OnInit {
  currentData: OverviewData;
  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.sensorService.getCurrentdataFromRemote().subscribe(data => {
      this.currentData = data;
      const myChart = new Chart("chartFloorLoad", {
        type: 'doughnut',
        data: {
          labels: ['Current Free Rooms', 'Current occupied Rooms'],
          datasets: [{
            label: '# of Votes',
            data: [this.currentData.numberOfFreeRooms,this.currentData.numberOfOccupiedRooms],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              grid: {
                display: false
              },
              title: {
                display: true,
                text: "Number of Rooms"
              },
              display: false
            }
          }
        },
      });
    });
  }

}
