import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {SensorService} from "../_service/sensor.service";
import {Subject} from "rxjs";
import {Sensordata} from "../../../_interface/Sensordata";

@Component({
    selector: 'app-sensor',
    templateUrl: './sensor.component.html',
    styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    sensordataList: Sensordata[] = [];
    sensorId: number;

    dtTrigger: Subject<any> = new Subject<any>();

    constructor(private location: Location, private activatedRoute: ActivatedRoute, private sensorService: SensorService) {
    }
    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            columnDefs: [{targets: 'no-sort', orderable: false}]
        };
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.sensorId = id;
        let date_ob = new Date();
        let date_ob2 = new Date(new Date().setDate(new Date().getDate() - 10));

        this.sensorService.getSensorDataBetweenDates(id, date_ob, date_ob2).subscribe(data => {
            this.sensordataList = data;
            this.dtTrigger.next();
            console.log(data);
        });
    }
    returnToSensorOverview() {
        this.location.back();
    }
}
