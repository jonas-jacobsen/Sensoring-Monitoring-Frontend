import {Sensor} from "./Sensor";

export class Room{
    roomId: number;
    roomName: string;
    roomType: string;
    floor: string;
    building: string;
    imageUrl:string;
    sensorList?: Sensor[];
    constructor() {
    }
}
