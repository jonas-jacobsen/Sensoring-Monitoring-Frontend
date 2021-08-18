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
import {Sensordata} from "../../../../_interface/Sensordata";
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
  selector: 'app-overview-chart-of-load',
  templateUrl: './overview-chart-of-load.component.html',
  styleUrls: ['./overview-chart-of-load.component.scss']
})
export class OverviewChartOfLoadComponent implements OnInit {

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.sensorService.getSensorListFromRemote().subscribe(data => {

      const lineChart = new Chart("line-chart", {
        type: 'line',
        data: {
          labels: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          datasets: [{
            data: [80,70,40,50,0],
            label: "Room 205",
            borderColor: "#3e95cd",
            fill: false
          }, {
            data: [30,50,60,0,20],
            label: "Room 102",
            borderColor: "#8e5ea2",
            fill: false
          }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              title: {
                display: true,
                text: "Utilization in %"
              },
              min: 0,
              max: 100,
              ticks: {
                stepSize: 10
              }
            }
          }
        },
      });
    });
  }
}
