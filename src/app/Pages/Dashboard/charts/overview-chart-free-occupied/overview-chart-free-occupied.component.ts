import { Component, OnInit } from '@angular/core';
import {Chart} from "chart.js";
import {SensorService} from "../../_service/sensor.service";
import {OverviewData} from "../../../../_interface/OverviewData";

@Component({
  selector: 'app-overview-chart-free-occupied',
  templateUrl: './overview-chart-free-occupied.component.html',
  styleUrls: ['./overview-chart-free-occupied.component.scss']
})
export class OverviewChartFreeOccupiedComponent implements OnInit {
  currentData: OverviewData;

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.sensorService.getCurrentdataFromRemote().subscribe(data => {
      this.currentData = data;
      console.log(data);
      const myChart = new Chart("chartFreeOccupied", {
      type: 'doughnut',
      data: {
        labels: ['Current free Rooms', 'Current occupied Rooms'],
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
            grid:{
              display:false
            },
            title: {
              display: true,
              text: "Number of Rooms"
            },
            display:false
          }
        }
      },
    });
    });
  }

}
