import {Component, OnDestroy, OnInit} from '@angular/core';
import {Room} from "../../../_interface/Room";
import {RoomService} from "../_service/room.service";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {SensorService} from "../_service/sensor.service";
import {OverviewData} from "../../../_interface/OverviewData";
import {PortalBeamService} from "../_service/portal-beam.service";
import {Sensordata} from "../../../_interface/Sensordata";
import {Sensor} from "../../../_interface/Sensor";

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnDestroy,OnInit {
    color: string;
    dataExist: boolean = false;
    dtOptions: DataTables.Settings = {};
    roomlist: Room[];
    sensorList: Sensor[];
    room: Room;
    currentData: OverviewData;
    dtTrigger: Subject<any> = new Subject<any>();
    isDataAvailable: boolean = false;
    areRoomsEmpty: boolean = false;


    constructor(private portalbeamService: PortalBeamService, private roomService: RoomService, private sensorService: SensorService, private route: Router) {
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            columnDefs: [{ targets: 'no-sort', orderable: false }]
        };
        this.roomService.fetchRoomListFromAPI().subscribe(data => {
            this.roomlist = data;
            this.dtTrigger.next();
            console.log(data);
        });

        this.sensorService.getCurrentdataFromRemote().subscribe(data => {
            this.currentData = data;
            if(this.currentData){
                this.isDataAvailable = true;
            }
            if(this.currentData?.roomWithMostPeople == ""){
                this.areRoomsEmpty = true;
            }else {
                this.areRoomsEmpty = false;
            }
        });
        this.sensorService.getSensorListFromRemote().subscribe( data => {
            this.sensorList = data
        })
    }


    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    showRoom(roomId){
        this.route.navigate(['dashboard/room/', roomId]);
    }
    changeToRoom(roomName){
        this.roomService.getRoomByRoomName(roomName).subscribe(data =>{
            this.room = data;
        })
        this.route.navigate(['dashboard/room/', this.room.roomId]);
    }
}
