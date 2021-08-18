import {Sensor} from "./Sensor";

export class Sensordata{
    sensordataId: number;
    //the Data represents for the Prototype the amount of people, messure of the sensor in the Conference room
    airquality: number;
    temperature: number;
    batteryLevel: number;
    lightIntensity: number;
    humidity: number;
    peopleInRoom: number;
    creationDate: string;
    sensor?: Sensor;
    constructor() {
    }
}
