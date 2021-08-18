import {Sensordata} from "./Sensordata";

export class Sensor{
    sensorId: string;
    roomId: string;
    sensorType: string;
    sensorAddress: string;
    sensordataList?: Sensordata[];
    constructor() {
    }
}
