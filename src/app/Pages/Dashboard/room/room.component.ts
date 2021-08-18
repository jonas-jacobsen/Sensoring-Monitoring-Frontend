import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {RoomService} from "../_service/room.service";
import {Room} from "../../../_interface/Room";
import {Sensor} from "../../../_interface/Sensor";
import {Sensordata} from "../../../_interface/Sensordata";
import {SensorService} from "../_service/sensor.service";
import {Subject} from "rxjs";
import {animate, style, transition, trigger} from "@angular/animations";


@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
    animations: [
        trigger('fade', [
            transition('void => *', [
                style({opacity: 0}),
                animate(2000, style({opacity: 1}))
            ])
        ])
    ]
})
export class RoomComponent implements OnInit {
    room: Room;
    currentData: Sensordata;
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject<any>();
    sensorlist?: Sensor[] = [];
    batterycolor: string = "green";
    isDataAvailable: boolean = false;
    isRoomAvailable: boolean = false;


    constructor(private roomService: RoomService, private sensorService: SensorService, private route: Router, private activatedRoute: ActivatedRoute, private location: Location) {
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            columnDefs: [{targets: 'no-sort', orderable: false}]
        };
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

        this.roomService.getSensorsByRoomId(id).subscribe(data => {
            this.room = data;
            this.sensorlist = this.room?.sensorList;
            this.isRoomAvailable = true;
        });

        this.sensorService.getLastSensorDataByIdFromRemote(id).subscribe(data => {
            this.currentData = data;
            if(this.currentData?.batteryLevel < 30){
                this.batterycolor = "red";
            }
            if(this.currentData){
                this.isDataAvailable = true;
            }
        });
    }

    returnToFloorplan():
        void {
        this.location.back();
    }

    ngOnDestroy():
        void {
        this.dtTrigger.unsubscribe();
    }

    showSensor(sensorId) {
        this.route.navigate(['dashboard/sensors/', sensorId]);
    }
}
