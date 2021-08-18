import {Component, OnDestroy, OnInit} from '@angular/core';
import {Sensor} from "../../../_interface/Sensor";
import {SensorService} from "../_service/sensor.service";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})

export class SensorsComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  sensorlist: Sensor[] = [];

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private  sensorService: SensorService, private route: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      columnDefs: [{ targets: 'no-sort', orderable: false }]
    };

    this.sensorService.getSensorListFromRemote().subscribe(data => {
      this.sensorlist = data;
      this.dtTrigger.next();
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  showSensor(sensorId){
    this.route.navigate(['dashboard/sensors/', sensorId]);
  }
  showRoom(roomId){
    this.route.navigate(['dashboard/room/', roomId]);
  }
}
