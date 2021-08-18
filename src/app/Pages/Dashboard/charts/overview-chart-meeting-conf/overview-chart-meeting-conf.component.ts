import {Component, OnInit} from '@angular/core';
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
import {OverviewData} from "../../../../_interface/OverviewData";
import {SensorService} from "../../_service/sensor.service";

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
    selector: 'app-overview-chart-meeting-conf',
    templateUrl: './overview-chart-meeting-conf.component.html',
    styleUrls: ['./overview-chart-meeting-conf.component.scss']
})
export class OverviewChartMeetingConfComponent implements OnInit {
    currentData: OverviewData;

    constructor(private sensorService: SensorService) {
    }

    ngOnInit(): void {
        this.sensorService.getCurrentdataFromRemote().subscribe(data => {
            this.currentData = data;
            const myChart = new Chart("chartMeetingConf", {
                type: 'doughnut',
                data: {
                    labels: ['Counted Conference Rooms', 'Counted Meeting Rooms'],
                    datasets: [{
                        label: '# of Votes',
                        data: [this.currentData.numberOfConferenceRooms, this.currentData.numberOfMeetingRooms],
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
