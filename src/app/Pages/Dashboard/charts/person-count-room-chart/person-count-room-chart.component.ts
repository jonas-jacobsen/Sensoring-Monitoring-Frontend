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
import {SensorService} from "../../_service/sensor.service";
import {ActivatedRoute} from "@angular/router";
import {Sensordata} from "../../../../_interface/Sensordata";
import {PortalBeamData} from "../../../../_interface/PortalBeamData";
import {PortalBeamService} from "../../_service/portal-beam.service";
import {stringify} from "querystring";

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
    selector: 'app-person-count-room-chart',
    templateUrl: './person-count-room-chart.component.html',
    styleUrls: ['./person-count-room-chart.component.scss']
})
export class PersonCountRoomChartComponent implements OnInit {
    sensorDataLastWeek?: Sensordata[] = [];
    peopleInRoomList?: number[] = [];
    creationDateList?: string[] = [];
    sensorDataList: Sensordata[] = [];

    constructor(private portalBeamService: PortalBeamService, private sensorService: SensorService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

        let date_ob = new Date();
        let date_ob2 = new Date(new Date().setDate(new Date().getDate() - 1));

        this.sensorService.getSensorDataBetweenDates(id, date_ob, date_ob2).subscribe(data => {
            this.sensorDataList = data;
            this.peopleInRoomList = this.sensorDataList.map((x) => x.peopleInRoom);
            this.creationDateList = this.sensorDataList.map((x) => x.creationDate.replace("Z", " ").replace("T", " "));

            const myChart = new Chart("chartPersonCountRoom", {
                type: 'bar',
                data: {
                    labels: this.creationDateList,
                    datasets: [{
                        label: 'People in Room',
                        data: this.peopleInRoomList,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                    },
                    scales: {
                        y: {
                            ticks: {
                                stepSize: 1
                            },
                        }
                    }
                },
            });
        });


    }
}
